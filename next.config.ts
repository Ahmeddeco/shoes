import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '120fw3rqlz.ufs.sh',
      },
    ],
  },
};

export default nextConfig;
