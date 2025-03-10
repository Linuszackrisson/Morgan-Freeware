'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Software } from '@/types/software';
import SoftwareCard from '@/components/SoftwareCard';
import { getAllSoftware, getUniqueCategories, filterSoftwareByCategory } from '@/lib/api';

export default function SoftwarePage() {
  const [software, setSoftware] = useState<Software[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const category = searchParams.get('category');
    const page = searchParams.get('page');
    
    if (category) {
      setSelectedCategory(category);
    }
    if (page) {
      setCurrentPage(parseInt(page));
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
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredSoftware.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSoftware = filteredSoftware.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    router.push(`?${params.toString()}`);
  };

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
              onClick={() => {
                setSelectedCategory('all');
                setCurrentPage(1);
                const params = new URLSearchParams(searchParams.toString());
                params.delete('category');
                params.set('page', '1');
                router.push(`?${params.toString()}`);
              }}
              className={`px-6 py-2.5 rounded-full transition-all duration-200 cursor-pointer ${
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
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                  const params = new URLSearchParams(searchParams.toString());
                  params.set('category', category);
                  params.set('page', '1');
                  router.push(`?${params.toString()}`);
                }}
                className={`px-6 py-2.5 rounded-full transition-all duration-200 cursor-pointer ${
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

        {/* Software Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {currentSoftware.map((item) => (
            <SoftwareCard key={item.id} software={item} variant="horizontal" />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer ${
                currentPage === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-black/60 hover:bg-black/5 border border-black/10'
              }`}
            >
              Previous
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer ${
                  currentPage === page
                    ? 'bg-[#6C5CE7] text-white shadow-lg'
                    : 'bg-white text-black/60 hover:bg-black/5 border border-black/10'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer ${
                currentPage === totalPages
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-black/60 hover:bg-black/5 border border-black/10'
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
} 