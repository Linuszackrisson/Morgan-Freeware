'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase, Software } from '@/utils/supabase';
import SoftwareCard from '@/components/SoftwareCard';
import Layout from '@/components/Layout';

export default function Home() {
  const [software, setSoftware] = useState<Software[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase
          .from('software')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          throw error;
        }

        if (data) {
          setSoftware(data);
          // Extract unique categories
          const uniqueCategories = Array.from(new Set(data.map(item => item.category)));
          setCategories(uniqueCategories);
        }
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
      <div className="bg-zinc-900">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Why Pay When the Best is Free?
            </h1>
            <p className="text-xl mb-8 text-zinc-400">
              Discover a world of powerful alternatives to expensive software. 
              Save money without compromising on quality - our handpicked library 
              of freeware delivers the same results as paid versions.
            </p>
            <button
              onClick={scrollToSoftware}
              className="bg-emerald-600 text-white px-8 py-4 text-lg font-semibold"
            >
              Browse Software
            </button>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
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
        <h2 className="text-3xl font-bold mb-8">Featured Software</h2>
        
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
