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
          <Link href="/" className="text-[#0B3B3B] font-bold text-xl">
            Morgan Freeware
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16"/>
            </svg>
          </button>

          {/* Centered Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-semibold absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="text-black/70">Home</Link>
            <Link href="/software" className="text-black/70">Software</Link>
            <Link href="/our-choice" className="text-black/70">Our Choice</Link>
            <Link href="/about" className="text-black/70">About</Link>
            <Link href="/contact" className="text-black/70">Contact</Link>
          </nav>

          {/* Request Button */}
          <Link 
            href="/request" 
            className="hidden md:block bg-[#2a7a44] text-white px-4 py-2 rounded-md hover:bg-[#0B3B3B]/90 transition-colors"
          >
            Request Software
          </Link>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden py-4 border-t border-zinc-800">
            <Link href="/" className="block py-2 text-white">Home</Link>
            <Link href="/software" className="block py-2 text-white">Software</Link>
            <Link href="/our-choice" className="block py-2 text-white">Our Choice</Link>
            <Link href="/about" className="block py-2 text-white">About</Link>
            <Link href="/contact" className="block py-2 text-white">Contact</Link>
            <Link 
              href="/request" 
              className="block py-2 text-white mt-2 bg-[#0B3B3B] px-4 rounded-md"
            >
              Request Software
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
} 