import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
        port: "1337",
      },
      {
        hostname: process.env.STRAPI_BASE_URL || "",
      },
    ],
  },
};

export default nextConfig;
