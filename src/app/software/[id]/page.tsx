'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Software } from '@/types/software';
import { getSoftwareById, getAllSoftware } from '@/app/api/software/route';
import { SoftwareCard } from '@/components/SoftwareCard';

export default function SoftwareDetail() {
  const { id } = useParams();
  const [software, setSoftware] = useState<Software | null>(null);
  const [relatedSoftware, setRelatedSoftware] = useState<Software[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getSoftwareById(id as string);
        setSoftware(data);
        
       
        const related = await getAllSoftware(data.category);
        setRelatedSoftware(related.filter(s => s.id !== data.id).slice(0, 4));
      } catch (error) {
        console.error('Error fetching software:', error);
      }
    }

    fetchData();
  }, [id]);

  if (!software) return null;

  return (
    <section className="w-full">
      <div className="container py-24">
        

        <div className="bg-white rounded-3xl p-12 ">
          <div className="flex items-start gap-12">
            {software?.icon_url && (
              <div className="w-40 h-40 rounded-2xl flex items-center justify-center p-2">
                <img
                  src={software.icon_url}
                  alt={`${software.title} icon`}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <div className="flex-1">
                <h1 className="text-6xl font-bold text-black/90 mb-4">{software.title}</h1>
              <span className="inline-block border border-gray-300 text-black/60 px-6 py-2 text-base rounded-full font-medium">
                {software.category}
              </span>
            </div>
          </div>

          <div className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-semibold text-black/80 mb-6">Description</h2>
            <p className="text-black/60 text-lg leading-relaxed">{software.description}</p>
          </div>

          <div className="mt-12 flex justify-between gap-6">
            {software.website_url && (
              <a
                href={software.website_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#6C5CE7] text-white px-8 py-4 text-lg rounded-full hover:bg-[#6C5CE7]/90 transition-colors font-medium"
              >
                Visit Website
              </a>
            )}
            <Link 
              href="/software" 
              className="inline-block bg-white text-black/80 px-8 py-4 text-lg rounded-full border border-gray-300 hover:bg-black/5 transition-colors font-medium"
            >
              Back to Software
            </Link>
          </div>
        </div>
      </div>

      {relatedSoftware.length > 0 && (
        <div className="container py-16">
          <h2 className="text-4xl font-bold text-black/60 mb-8">Related Software</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {relatedSoftware.map((item) => (
              <SoftwareCard key={item.id} software={item}/>
            ))}
          </div>
        </div>
      )}
    </section>
  );
} 