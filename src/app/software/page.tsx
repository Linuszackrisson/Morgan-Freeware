'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase, Software } from '@/utils/supabase';

export default function SoftwarePage() {
  const [software, setSoftware] = useState<Software[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const searchParams = useSearchParams();

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

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

  const filteredSoftware = selectedCategory === 'all'
    ? software
    : software.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Software</h1>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 ${
                selectedCategory === 'all'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-zinc-900 text-zinc-300'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white'
                    : 'bg-zinc-900 text-zinc-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Software Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="w-12 h-12 border-2 border-emerald-500 border-t-transparent mx-auto animate-spin"></div>
            <p className="mt-4 text-zinc-400">Loading software...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSoftware.map((item) => (
              <div key={item.id} className="bg-zinc-900 p-6">
                <div className="flex items-center mb-4">
                  {item.icon_url && (
                    <img
                      src={item.icon_url}
                      alt={`${item.title} icon`}
                      className="w-12 h-12 mr-4"
                    />
                  )}
                  <div>
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    <p className="text-zinc-400">{item.category}</p>
                  </div>
                </div>
                <p className="text-zinc-300 mb-4">{item.description}</p>
                <div className="flex gap-4">
                  {item.preview_url && (
                    <a
                      href={item.preview_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-500"
                    >
                      Preview
                    </a>
                  )}
                  {item.website_url && (
                    <a
                      href={item.website_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-500"
                    >
                      Website
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 