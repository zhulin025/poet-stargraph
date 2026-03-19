import { NextRequest, NextResponse } from 'next/server';

// For local development, ignore SSL certificate issues if the system's CA stores are outdated
if (process.env.NODE_ENV === 'development') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

export const runtime = 'nodejs'; // Use standard nodejs runtime for better certificate handling

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

    // Prepare headers for the target API
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    };

    // Prepare body for the target API (OpenAI-compatible format)
    const body = {
      model,
      messages,
      stream: true,
    };

    // Add /chat/completions if not present in baseUrl
    const targetUrl = baseUrl.endsWith('/chat/completions') 
      ? baseUrl 
      : `${baseUrl.replace(/\/$/, '')}/chat/completions`;

    const response = await fetch(targetUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({ error: `API responded with status ${response.status}`, details: errorText }, { status: response.status });
    }

    // Stream the response back to the client
    return new Response(response.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  } catch (error: any) {
    console.error('Proxy Error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
