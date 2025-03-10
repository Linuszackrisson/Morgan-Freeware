'use client';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Software } from '@/types/software';
import SoftwareCard from '@/components/SoftwareCard';
import HeroSection from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import { getAllSoftware, getUniqueCategories } from '@/lib/api';
import { Code } from 'lucide-react';

export default function Home() {
  const [software, setSoftware] = useState<Software[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    getAllSoftware().then(data => {
      setSoftware(data);
      setCategories(getUniqueCategories(data));
    }).catch(console.error);
  }, []);

  return (
    <main className="w-full min-h-screen relative bg-white">
      {/* Rutnät för att få till lite liv på sidan, såg livlöst ut innan*/}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            radial-gradient(circle at center, rgba(99, 102, 241, 0.05) 0, transparent 2px)
          `,
          backgroundSize: `
            80px 80px,
            80px 80px,
            16px 16px
          `,
          backgroundPosition: `
            -40px -40px,
            -40px -0px,
            -8px -8px
          `,
          zIndex: 0
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent" style={{ zIndex: 0 }} />
      
      <div className="relative z-1">
        <HeroSection />
        
        <section className="w-full">
          <div id="software-section" className="container py-16">
          <div className="flex items-center justify-between mb-6">
          <h2 className="text-4xl font-bold text-black/60">Software</h2>
          <Link 
            href="/software" 
            className="group flex items-center gap-2 text-black/60 hover:text-black/80"
          >
            See all software
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
            <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
              <div className="md:col-span-3">
                {software[0] && <SoftwareCard software={software[17]} variant="large" />}
              </div>
              <div className="md:col-span-4">
                <div className="grid gap-6">
                  {software[1] && <SoftwareCard software={software[1]} variant="horizontal" />}
                  {software[2] && <SoftwareCard software={software[2]} variant="horizontal" />}
                </div>
              </div>
              <div className="md:col-span-3">
                {software[4] && <SoftwareCard software={software[16]} variant="large" />}
              </div>

              <div className="md:col-span-4">
                <div className="grid gap-6">
                  {software[5] && <SoftwareCard software={software[8]} variant="horizontal" />}
                  {software[6] && <SoftwareCard software={software[6]} variant="horizontal" />}
                </div>
              </div>
              <div className="md:col-span-3">
                {software[7] && <SoftwareCard software={software[7]} variant="large" />}
              </div>
              <div className="md:col-span-3 ">
                <div className="bg-white rounded-2xl p-8 border border-gray-300 h-[400px]">
                  <Link href="/software" className="block h-full">
                    <div className="flex flex-col h-full items-center justify-center text-center">
                      <div className="w-24 h-24 rounded-2xl bg-[#0B3B3B]/5 flex items-center justify-center">
                        <Code className="w-12 h-12 text-black/90" />
                      </div>
                      <div className="mt-6">
                        <h2 className="text-black/90 text-2xl font-bold mb-3 ">
                          View All Software
                        </h2>
                        <p className="text-black/50">
                          Explore our complete collection of<br />free software alternatives
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CategoryGrid />
      </div>
    </main>
  );
}
