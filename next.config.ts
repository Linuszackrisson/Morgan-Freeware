import type { NextConfig } from 'next';

const config: NextConfig = {
  // Inaktivera bildoptimering om du använder statisk export
  images: {
    unoptimized: true,
  },

  // Ignorera ESLint-fel under byggprocessen
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default config;