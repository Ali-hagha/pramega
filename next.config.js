/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
        port: '',
        pathname: '/700x500/**',
      },
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
        port: '',
        pathname: '/1000x1000/**',
      },
    ],
  },
};

module.exports = nextConfig;
