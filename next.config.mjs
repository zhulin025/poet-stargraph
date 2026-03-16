/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 由于部署在 github.io/poet-stargraph/ 下，必须配置路径前缀
  basePath: '/poet-stargraph',
  assetPrefix: '/poet-stargraph/',
  trailingSlash: true,
};

export default nextConfig;
