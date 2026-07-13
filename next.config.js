/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/order",
        destination: "/get-started",
        permanent: true, // 301
      },
    ];
  },
};

module.exports = nextConfig;
