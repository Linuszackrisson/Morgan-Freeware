import type { NextConfig } from 'next'

const config: NextConfig = {
  // Ta bort output: 'export' helt och hållet eftersom Render inte stöder det
  // ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}), // Ta bort denna rad
  
  images: {
    unoptimized: true // Inaktivera bildoptimering om du använder statiska export
  },
  
  // Använd basePath endast i produktion
  basePath: process.env.NODE_ENV === 'production' ? '/Morgan-Freeware' : '',
  
  eslint: {
    ignoreDuringBuilds: true // Ignorera ESLint-fel under byggprocessen
  }
}

export default config