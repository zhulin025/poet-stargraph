import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

// For local development, ignore SSL certificate issues if the system's CA stores are outdated
if (process.env.NODE_ENV === 'development') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

export const runtime = 'nodejs'; // Use standard nodejs runtime for better certificate handling

const CACHE_DIR = path.join(process.cwd(), 'src/data/ai-cache');

// Ensure cache directory exists
if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
}

export async function POST(req: NextRequest) {
  try {
    const bodyData = await req.json();
    
    // Prioritize Server-side environment variables for production
    const apiKey = process.env.AI_API_KEY || bodyData.apiKey;
    const baseUrl = process.env.AI_BASE_URL || bodyData.baseUrl;
    const model = process.env.AI_MODEL || bodyData.model;
    const messages = bodyData.messages;

    if (!apiKey || !baseUrl || !model) {
      return NextResponse.json({ 
        error: 'CONFIG_REQUIRED', 
        message: 'AI configuration is missing. Please set environment variables or configure in settings.' 
      }, { status: 400 });
    }

    if (!messages) {
      return NextResponse.json({ error: 'Missing messages' }, { status: 400 });
    }

    const cacheKey = crypto.createHash('sha256').update(JSON.stringify({ messages, model })).digest('hex');
    const cachePath = path.join(CACHE_DIR, `${cacheKey}.json`);

    // Check if cache exists
    if (fs.existsSync(cachePath)) {
      const cachedContent = fs.readFileSync(cachePath, 'utf-8');
      const cachedData = JSON.parse(cachedContent);
      const isStream = bodyData.stream !== false;

      // For non-streaming requests, return JSON directly
      if (!isStream) {
        return NextResponse.json({
          choices: [{ message: { content: cachedData.content } }]
        });
      }
      
      // For streaming requests, return a simulated stream
      const encoder = new TextEncoder();
      const stream = new ReadableStream({
        async start(controller) {
          const content = cachedData.content;
          const chunkSize = 20;
          for (let i = 0; i < content.length; i += chunkSize) {
            const chunk = content.slice(i, i + chunkSize);
            const data = JSON.stringify({
              choices: [{ delta: { content: chunk } }]
            });
            controller.enqueue(encoder.encode(`data: ${data}\n\n`));
            if (i % (chunkSize * 5) === 0) {
              await new Promise(resolve => setTimeout(resolve, 0));
            }
          }
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
        }
      });

      return new Response(stream, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
        },
      });
    }

    // Prepare headers for the target API
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    };

    // Add /chat/completions if not present in baseUrl
    const targetUrl = baseUrl.endsWith('/chat/completions') 
      ? baseUrl 
      : `${baseUrl.replace(/\/$/, '')}/chat/completions`;

    const isStream = bodyData.stream !== false;

    // Prepare body for the target API
    const body = {
      model,
      messages,
      stream: isStream,
    };

    const response = await fetch(targetUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({ error: `API responded with status ${response.status}`, details: errorText }, { status: response.status });
    }

    // Handle non-streaming response
    if (!isStream) {
      const data = await response.json();
      const content = data.choices[0]?.message?.content || '';
      
      // Save to cache
      if (content) {
        fs.writeFileSync(cachePath, JSON.stringify({ 
          content, 
          model,
          timestamp: Date.now() 
        }));
      }
      
      return NextResponse.json(data);
    }

    // Stream the response back to the client immediately using tee()
    if (!response.body) {
      return NextResponse.json({ error: 'Empty response body from AI' }, { status: 500 });
    }

    const [clientBody, cacheBody] = response.body.tee();

    // Spawn a background task to collect cache (don't await it to avoid blocking the response)
    (async () => {
      try {
        const reader = cacheBody.getReader();
        const decoder = new TextDecoder();
        let fullContent = '';
        let buffer = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            const trimmedLine = line.trim();
            if (trimmedLine.startsWith('data: ')) {
              const dataStr = trimmedLine.substring(5).trim(); // More robust than replace
              if (dataStr === '[DONE]') continue;
              try {
                const data = JSON.parse(dataStr);
                fullContent += data.choices[0]?.delta?.content || '';
              } catch (e) {}
            }
          }
        }
        
        if (fullContent) {
          fs.writeFileSync(cachePath, JSON.stringify({ 
            content: fullContent, 
            model,
            timestamp: Date.now() 
          }));
        }
      } catch (err) {
        console.error('Background caching error:', err);
      }
    })();

    return new Response(clientBody, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache, no-transform',
        'Connection': 'keep-alive',
        'X-Accel-Buffering': 'no', // Disable buffering for Nginx/Vercel
      },
    });

  } catch (error: any) {
    console.error('Proxy Error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}

