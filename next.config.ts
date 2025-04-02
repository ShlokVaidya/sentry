import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["i.pravatar.cc", "picsum.photos"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
