/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 如果部署在 github.io/<repo-name>/ 下，请取消下两行的注释并修改为您的仓库名
  // basePath: '/poet-stargraph',
  // assetPrefix: '/poet-stargraph/',
};

export default nextConfig;
