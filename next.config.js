const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 仅在 GitHub Actions 环境下启用静态导出及路径前缀
  output: isGithubActions ? 'export' : undefined,
  basePath: isGithubActions ? '/poet-stargraph' : '',
  assetPrefix: isGithubActions ? '/poet-stargraph/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
