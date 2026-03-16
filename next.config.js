/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/poet-stargraph',
  assetPrefix: '/poet-stargraph/',
  trailingSlash: true,
};

module.exports = nextConfig;
