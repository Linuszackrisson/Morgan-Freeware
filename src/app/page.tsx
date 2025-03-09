'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Software } from '@/utils/supabase';
import SoftwareCard from '@/components/SoftwareCard';
import HeroSection from '@/components/Hero';
import { getAllSoftware, getUniqueCategories } from '@/lib/api';
import { Code } from 'lucide-react';

export default function Home() {
  const [software, setSoftware] = useState<Software[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllSoftware().then(data => {
      setSoftware(data);
      setCategories(getUniqueCategories(data));
      setLoading(false);
    }).catch(console.error);
  }, []);

  return (
    <>
      <HeroSection />
      {/* Skitjobbig sektion att göra, tog lång tid att få den korrekt. Designen är dessutom stulen från en annan sida! */}
      <section className="w-full bg-white">
        <div id="software-section" className="container py-16">
          {loading ? (
            <div className="text-center py-12">
              <div className="w-12 h-12 border-2 border-[#4ECDC4] border-t-transparent mx-auto animate-spin"/>
              <p className="mt-4 text-white/60">Loading software...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
              <div className="md:col-span-3">
                {software[0] && <SoftwareCard software={software[0]} variant="large" />}
              </div>
              <div className="md:col-span-4">
                <div className="grid gap-6">
                  {software[1] && <SoftwareCard software={software[1]} variant="horizontal" />}
                  {software[2] && <SoftwareCard software={software[2]} variant="horizontal" />}
                </div>
              </div>
              <div className="md:col-span-3">
                {software[4] && <SoftwareCard software={software[4]} variant="large" />}
              </div>

              <div className="md:col-span-4">
                <div className="grid gap-6">
                  {software[5] && <SoftwareCard software={software[5]} variant="horizontal" />}
                  {software[6] && <SoftwareCard software={software[6]} variant="horizontal" />}
                </div>
              </div>
              <div className="md:col-span-3">
                {software[7] && <SoftwareCard software={software[7]} variant="large" />}
              </div>
              <div className="md:col-span-3">
                <div className="bg-white rounded-2xl p-8 border border-gray-300 h-[400px]">
                  <Link href="/software" className="block h-full">
                    <div className="flex flex-col h-full items-center justify-center text-center">
                      <div className="w-24 h-24 rounded-2xl bg-[#0B3B3B]/5 flex items-center justify-center">
                        <Code className="w-12 h-12 text-black/90" />
                      </div>
                      <div className="mt-6">
                        <h2 className="text-black/90 text-2xl font-bold mb-3">
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
          )}
        </div>
      </section>

      {/* Browse by Category section - Tar bort den tillfälligt eftersom det inte är relevant för våra mål
      <section className="w-full bg-white">
        <div className="container py-24">
          <h2 className="text-4xl font-bold mb-12">Browse by Category</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(category => (
              <Link
                key={category}
                href={`/software?category=${encodeURIComponent(category)}`}
              >
                <div>
                  <h3 className="text-xl">{category}</h3>
                  <p className="text-sm text-gray-600">
                    {software.filter(item => item.category === category).length} items
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      */}
    </>
  );
}
