/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/index',
        destination: 'https://truce-index.vercel.app',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
