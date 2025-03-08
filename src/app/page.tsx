'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Software } from '@/utils/supabase';
import SoftwareCard from '@/components/SoftwareCard';
import { getAllSoftware, getUniqueCategories } from '@/lib/api';

export default function Home() {
  const [software, setSoftware] = useState<Software[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllSoftware();
        setSoftware(data);
        setCategories(getUniqueCategories(data));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const scrollToSoftware = () => {
    const softwareSection = document.getElementById('software-section');
    if (softwareSection) {
      softwareSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#0B3B3B]">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Text content */}
            <div className="max-w-3xl">
              <h1 className="text-6xl font-bold mb-6">
                No paywall <br></br>
                No piracy
                <br></br>
                Just Pure Power
              </h1>
              
              <p className="text-xl mb-8 text-white/80">
                Why pay for overpriced licenses or risk shady downloads? We've handpicked the best alternatives that deliver the same results.  
                Discover top-tier software, securely and for free, all in one place.
              </p>

              <button
                onClick={scrollToSoftware}
                className="border-white/80 border-2 text-white px-8 py-4 text-lg font-semibold"
              >
                Browse Software
              </button>
            </div>

            {/* Right side - Wallet Image */}
            <div className="hidden lg:flex justify-end">
              <img 
                src="/assets/wallet.svg" 
                alt="Wallet illustration" 
                className="w-96 h-96"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Browse by Category</h2>
          <Link 
            href="/software" 
            className="text-emerald-500 hover:text-emerald-400"
          >
            See all categories →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/software?category=${encodeURIComponent(category)}`}
              className="bg-zinc-900 p-6 border border-zinc-800"
            >
              <h3 className="text-xl font-semibold mb-2">{category}</h3>
              <p className="text-zinc-400">
                {software.filter(item => item.category === category).length} items
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Software Section */}
      <div id="software-section" className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Software</h2>
          <Link 
            href="/software" 
            className="text-emerald-500 hover:text-emerald-400"
          >
            View all software →
          </Link>
        </div>
        
        {loading ? (
          <div className="text-center py-12">
            <div className="w-12 h-12 border-2 border-emerald-500 border-t-transparent mx-auto animate-spin"></div>
            <p className="mt-4 text-zinc-400">Loading software...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {software.slice(0, 6).map((item) => (
              <SoftwareCard key={item.id} software={item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
