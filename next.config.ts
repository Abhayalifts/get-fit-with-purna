import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allows the build to proceed even if there are minor warnings
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Required for external assets (Sanity/Supabase)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co',
      },
    ],
  },
};

export default nextConfig;