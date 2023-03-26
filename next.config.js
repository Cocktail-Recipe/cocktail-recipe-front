/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-alpha-sig.figma.com', // 임시 작업
        port: '',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
