'use client';

import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full">
      <div className="container px-4 py-20 md:py-32 text-center">
        <div className="flex flex-col items-center max-w-3xl mx-auto">
          <div className="flex gap-3 mb-8">
            <div className="w-3 h-3 rounded-full bg-[var(--color-primary)]"></div>
            <div className="w-3 h-3 rounded-full bg-[var(--color-primary)] opacity-80"></div>
            <div className="w-3 h-3 rounded-full bg-[var(--color-primary)] opacity-60"></div>
            <div className="w-3 h-3 rounded-full bg-[var(--color-primary)] opacity-40"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-6 leading-tight">
            Make Your Wallet Happy
            <span className="text-[var(--color-primary)] block mt-2">Discover Free Software</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-10 max-w-2xl leading-relaxed">
            Discover the best free software alternatives for your needs. Get the same results for a fraction of the cost.
          </p>
          <Link 
            href="/software" 
            className="bg-[var(--color-primary)] text-[var(--color-background)] px-8 py-4 rounded-[var(--border-radius)] text-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Start Exploring
          </Link>
        </div>
      </div>
    </section>
  );
} 