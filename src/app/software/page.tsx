'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Software } from '@/types/software';
import SoftwareCard from '@/components/SoftwareCard';
import { getAllSoftware, getUniqueCategories, filterSoftwareByCategory } from '@/lib/api';

export default function SoftwarePage() {
  const [software, setSoftware] = useState<Software[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
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
        const data = await getAllSoftware();
        setSoftware(data);
        setCategories(getUniqueCategories(data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const filteredSoftware = filterSoftwareByCategory(software, selectedCategory);

  return (
    <section className="w-full">
      <div className="container py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black/60 mb-4">Software Collection</h1>
          <p className="text-black/40 max-w-2xl mx-auto">
            Discover our curated collection of free software alternatives. Find the perfect tools for your needs without breaking the bank.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2.5 rounded-full transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-[#6C5CE7] text-white shadow-lg'
                  : 'bg-white text-black/60 hover:bg-black/5 border border-black/10'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-[#6C5CE7] text-white shadow-lg'
                    : 'bg-white text-black/60 hover:bg-black/5 border border-black/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Software Grid OBS VI KÖR SOM HORIZONTAL KORTEN HÄR*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
          {filteredSoftware.map((item) => (
            <SoftwareCard key={item.id} software={item} variant="horizontal" />

          ))}
        </div>
      </div>
    </section>
  );
} 