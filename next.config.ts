import type { NextConfig } from 'next'

const config: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/Morgan-Freeware',
  eslint: {
    // Stäng av ESLint under build
    ignoreDuringBuilds: true
  }
}

export default config