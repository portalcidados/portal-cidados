import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "climaesociedade.org",
      },
    ],
  },
};

export default nextConfig;
