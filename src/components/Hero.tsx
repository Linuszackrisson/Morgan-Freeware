'use client';

import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full pt-24">
      <div className="container py-24 text-center">
        <div className="flex flex-col items-center max-w-3xl mx-auto">
          {/* Dots */}
          <div className="flex gap-2 mb-6">
            <div className="w-4 h-4 rounded-full bg-[#4CAF50]"></div>
            <div className="w-4 h-4 rounded-full bg-[#2196F3]"></div>
            <div className="w-4 h-4 rounded-full bg-[#FFC107]"></div>
            <div className="w-4 h-4 rounded-full bg-[#FF5722]"></div>
          </div>

          {/* Heading */}
          <h1 className="text-6xl font-bold text-[#1a1a1a] mb-6">
            Make Your Wallet Happy <br></br>
            <span className="text-[#6C5CE7]">Discover Free Software</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-[#0B3B3B]/70 mb-8 max-w-2xl">
            Discover the best free software alternatives for your needs. Get the same results for a fraction of the cost.
          </p>

          {/* CTA Button */}
          
          <Link href="/software" className="bg-[#6C5CE7] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#6C5CE7]/90 transition-colors">
            Start Exploring
          </Link>
        </div>
      </div>
    </section>
  );
} 