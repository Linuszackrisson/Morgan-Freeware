'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#2a7a44]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-white font-bold text-xl">
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 font-semibold">
            <Link href="/" className="text-white">Home</Link>
            <Link href="/software" className="text-white">Software</Link>
            <Link href="/our-choice" className="text-white">Our Choice</Link>
            <Link href="/about" className="text-white">About</Link>
            <Link href="/contact" className="text-white">Contact</Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden py-4 border-t border-zinc-800">
            <Link href="/" className="block py-2">Home</Link>
            <Link href="/software" className="block py-2">Software</Link>
            <Link href="/our-choice" className="block py-2">Our Choice</Link>
            <Link href="/about" className="block py-2">About</Link>
            <Link href="/contact" className="block py-2">Contact</Link>
          </nav>
        )}
      </div>
    </header>
  );
} 