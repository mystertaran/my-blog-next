/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  async rewrites() {
    return [
      // Serwowanie plików statycznych z folderu files
      {
        source: '/files/:path*',
        destination: '/files/:path*',
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);