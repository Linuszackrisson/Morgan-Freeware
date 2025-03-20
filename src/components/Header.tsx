'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[var(--color-background)] shadow-sm sticky top-0 z-50 border-b border-[var(--color-border)]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 text-[var(--color-text-primary)]">
            <Image src="/assets/icon.svg" alt="Morgan Freeman Logo" width={32} height={32} />
            <span className="font-bold text-xl font-[var(--font-orbitron)]">
              Morgan Freeman
            </span>
          </Link>
          
          <button 
            className="md:hidden p-2 text-[var(--color-text-primary)]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16"/>
            </svg>
          </button>

          <nav className="hidden md:flex items-center space-x-8 font-medium absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">Home</Link>
            <Link href="/software" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">Software</Link>
            <Link href="/about" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">About</Link>
          </nav>

          <Link 
            href="#contact" 
            className="hidden md:block bg-[var(--color-primary)] text-[var(--color-background)] px-6 py-2 rounded-sm font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Contact us
          </Link>
        </div>

        {menuOpen && (
          <nav className="md:hidden py-4 border-t border-[var(--color-border)]">
            <Link href="/" className="block py-2 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">Home</Link>
            <Link href="/software" className="block py-2 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">Software</Link>
            <Link href="/about" className="block py-2 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">About</Link>
            <Link 
              href="#contact" 
              className="inline-block mt-4 bg-[var(--color-primary)] text-[var(--color-background)] px-6 py-2 rounded-[var(--border-radius)] font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contact us
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
} 