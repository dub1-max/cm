import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        port: "",
      },
      {
        protocol: "https",
        hostname: "*.previews.dropboxusercontent.com",
        port: "",
      },
      // Add this new pattern for aceternity assets
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;