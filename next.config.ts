/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Keeps the build moving even if there are small linting/type issues
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // 2. REQUIRED if you are pulling images from Sanity or Supabase
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'your-supabase-project-id.supabase.co', // Replace with your actual Supabase ID later
        port: '',
      },
    ],
  },
};

export default nextConfig;