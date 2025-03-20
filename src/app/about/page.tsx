'use client';
// About page, ingen speciell logik här. 
// Det är bara en liten text om vad sidan handlar om.
// Tailwind för styling och Lucide för ikoner.

import { Info, Lightbulb, Palette, Wrench, AlertTriangle } from 'lucide-react';
export default function About() {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-16">
        <h1 className="text-4xl font-bold text-[var(--color-text-primary)] flex items-center gap-4">
          <Info className="w-10 h-10 text-[var(--color-primary)]" />
          About Us
        </h1>
        
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-[var(--color-text-primary)] flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[var(--color-primary-light)]">
              <Info className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            What is this?
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            Welcome to your treasure map for finding amazing free software! We're here to show you 
            that you don't need to empty your wallet or venture into the dangerous waters of piracy 
            to get great software.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-[var(--color-text-primary)] flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[var(--color-primary-light)]">
              <Lightbulb className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            Our Mission
          </h2>
          <div className="space-y-4">
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Tired of subscription fatigue? We feel you! Our mission is simple: to help you find 
              awesome free alternatives to expensive software. Because let's face it - nobody wants 
              to choose between buying software and buying pizza. (And we all know pizza always wins!)
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              We're also here to show you that downloading sketchy software from dubious websites 
              is about as smart as trying to teach a cat to fetch. There are better ways, we promise!
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-[var(--color-text-primary)] flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[var(--color-primary-light)]">
              <Palette className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            Why Free Software?
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            Think of free software like finding a $20 bill in your old jeans - it's a wonderful surprise 
            that makes your day better! The open-source community is full of talented developers who create 
            amazing tools that rival (and sometimes surpass) their expensive counterparts. Why pay hundreds 
            when you can pay nothing and still get the job done?
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-[var(--color-text-primary)] flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[var(--color-primary-light)]">
              <AlertTriangle className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            Join The Movement
          </h2>
          <div className="space-y-4">
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Let's make expensive software subscriptions and risky downloads a thing of the past! 
              Browse our collection, find your new favorite tools, and join our community of savvy 
              software users. Your wallet (and your computer's security) will thank you later.
            </p>
            
          </div>
        </section>
      </div>
    </div>
  );
} 