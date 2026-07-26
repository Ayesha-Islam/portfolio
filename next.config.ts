import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 95],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;