import type { NextConfig } from 'next'

const config: NextConfig = {
  // Ta bort output: 'export' under utveckling för att API routes ska fungera
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),
  
  images: {
    unoptimized: true
  },
  
  // Använd basePath endast i produktion
  basePath: process.env.NODE_ENV === 'production' ? '/Morgan-Freeware' : '',
  
  eslint: {
    ignoreDuringBuilds: true
  }
}

export default config