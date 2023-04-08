/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dsx97ocm5rfcr.cloudfront.net',
        port: '',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
