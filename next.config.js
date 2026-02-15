/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      // safest: both domains + remotePatterns
      domains: ["images.unsplash.com"],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.unsplash.com",
          pathname: "/**",
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  