/** @type {import('next').NextConfig} */
const nextConfig = {
  // Netlify용 정적 export 설정
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/lib/imageLoader.js',
  },
};

module.exports = nextConfig;
