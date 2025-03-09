'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo with new color */}
          <Link href="/" className="text-[#1a1a1a] font-bold text-xl">
            Morgan FreeWare
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="#6C5CE7" viewBox="0 0 24 24">
              <path strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16"/>
            </svg>
          </button>

          {/* Centered Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-semibold absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="text-[#1a1a1a]/70 hover:text-[#1a1a1a]">Home</Link>
            <Link href="/software" className="text-[#1a1a1a]/70 hover:text-[#1a1a1a]">Software</Link>
            <Link href="/about" className="text-[#1a1a1a]/70 hover:text-[#1a1a1a]">About</Link>
            <Link href="/contact" className="text-[#1a1a1a]/70 hover:text-[#1a1a1a]">Contact</Link>
            
          </nav>

          {/* Request Button */}
          <Link 
            href="/" 
            className="hidden md:block bg-[#6C5CE7] text-white px-4 py-2 rounded-full hover:bg-[#6C5CE7]/90 transition-colors"
          >
            Request Software
          </Link>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <Link href="/" className="block py-2 text-[#1a1a1a]/70 hover:text-[#1a1a1a]">Home</Link>
            <Link href="/software" className="block py-2 text-[#1a1a1a]/70 hover:text-[#1a1a1a]">Software</Link>
            <Link href="/about" className="block py-2 text-[#1a1a1a]/70 hover:text-[#1a1a1a]">About</Link>
            <Link href="/contact" className="block py-2 text-[#1a1a1a]/70 hover:text-[#1a1a1a]">Contact</Link>
            <Link 
              href="/" 
              className="inline-block py-2 text-white mt-4 bg-[#6C5CE7] px-6 rounded-full hover:bg-[#6C5CE7]/90 transition-colors mx-auto"
            >
              Request Software
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
} 