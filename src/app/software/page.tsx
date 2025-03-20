'use client'; //klient sida eftersom vi har useEffect och useSearchParams, vi eftersom dessa inte kan användas direkt på servern. 


// importerar alla nödvändiga funktioner och komponenter
import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Software } from '@/types/software';
import { SoftwareCard } from '@/components/SoftwareCard';
import { getAllSoftware, getCategories } from '@/utils/software-service';

// skapar en funktion för att hämta våra software och kategorier
function SoftwareContent() {
  const [software, setSoftware] = useState<Software[]>([]); //array för dessa data
  const [categories, setCategories] = useState<string[]>([]); //array för dessa data
  const [selectedCategory, setSelectedCategory] = useState<string>('all'); //state för att hålla koll på våra valda kategorier
  const [currentPage, setCurrentPage] = useState(1); //state för att hålla koll på våra valda sidor
  const itemsPerPage = 10; //antal items per sida. Tio var lagom för jag vill fortfarande visa korten snyggt.
  const searchParams = useSearchParams(); //hämtar våra search params som vi kommer använda för att hämta våra kategorier och sidor när vi klickar på knapparna för att gå fram o tbx
  const router = useRouter(); //hämtar våra router som vi kommer använda för att navigera mellan sidor

  useEffect(() => {
    const category = searchParams.get('category'); //hämtar våra kategorier
    const page = searchParams.get('page'); //hämtar våra sidor
    
    if (category) {
      setSelectedCategory(category); //sätter våra kategori, kan även vara all
    }
    if (page) {
      setCurrentPage(parseInt(page)); //sätter våra sidor
    }
  }, [searchParams]); //kör funktionen igenom våra search params

  useEffect(() => {
    async function fetchData() {
      try {
        const [softwareData, categoriesData] = await Promise.all([ //promise.all är en funktion som gör att vi kan köra flera promises samtidigt, vi kommer använda detta för att hämta våra software och kategorier samtidigt
          getAllSoftware(selectedCategory),
          getCategories()
        ]);
        setSoftware(softwareData); 
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [selectedCategory]);

  const totalPages = Math.ceil(software.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSoftware = software.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <section className="w-full min-h-screen relative bg-white">
      <div className="container py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">Software Collection</h1>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Discover our curated collection of free software alternatives. Find the perfect tools for your needs without breaking the bank.
          </p>
        </div>

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
              className={`px-6 py-2.5 rounded-[var(--border-radius)] transition-all duration-200 cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[var(--color-primary)] text-[var(--color-background)] shadow-lg'
                  : 'bg-white text-[var(--color-text-secondary)] hover:bg-black/5 border border-[var(--color-border)]'
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
                className={`px-6 py-2.5 rounded-[var(--border-radius)] transition-all duration-200 cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-[var(--color-primary)] text-[var(--color-background)] shadow-lg'
                    : 'bg-white text-[var(--color-text-secondary)] hover:bg-black/5 border border-[var(--color-border)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {currentSoftware.map((item) => (
            <SoftwareCard key={item.id} software={item} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-[var(--border-radius)] transition-all duration-200 cursor-pointer ${
                currentPage === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-[var(--color-text-secondary)] hover:bg-black/5 border border-[var(--color-border)]'
              }`}
            >
              Previous
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-[var(--border-radius)] transition-all duration-200 cursor-pointer ${
                  currentPage === page
                    ? 'bg-[var(--color-primary)] text-[var(--color-background)] shadow-lg'
                    : 'bg-white text-[var(--color-text-secondary)] hover:bg-black/5 border border-[var(--color-border)]'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-[var(--border-radius)] transition-all duration-200 cursor-pointer ${
                currentPage === totalPages
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-[var(--color-text-secondary)] hover:bg-black/5 border border-[var(--color-border)]'
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

export default function SoftwarePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SoftwareContent />
    </Suspense>
  );
} 