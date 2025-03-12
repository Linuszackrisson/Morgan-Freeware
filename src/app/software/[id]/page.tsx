'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Software } from '@/types/software';
import { getSoftwareById, getAllSoftware, updateSoftwareRating } from '@/app/api/software/route';
import { SoftwareCard } from '@/components/SoftwareCard';
import { RatingStars } from '@/components/RatingStars';

export default function SoftwareDetail() {
  const { id } = useParams();
  const [software, setSoftware] = useState<Software | null>(null);
  const [relatedSoftware, setRelatedSoftware] = useState<Software[]>([]);
 

  // Hämtar software från databasen och sätter det i state, och plockar ut alla i samma kategori
  // Jag hatar sådana här grötiga funktioner men det var nödvändigt att ha, annars hade software pagen blivit väldigt tråkig
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSoftwareById(id as string);
        setSoftware(data);
        
        const related = await getAllSoftware(data.category);
        setRelatedSoftware(related.filter(s => s.id !== data.id).slice(0, 4));
      } catch (error) {
        console.error('Error fetching software:', error);
      }
    };

    fetchData();
  }, [id]);
  // uppdaterar ratingen för softwaren och sätter det i local storage eftersom vi inte har användare, och jag vill inte ha massa spammade ratingar
  // men databasen uppdateras ändå
  const handleRate = async (rating: number) => {
    try {
      const result = await updateSoftwareRating(id as string, rating);
      setSoftware(prev => prev ? { ...prev, ...result } : null);
      
      // Spara att användaren har röstat
      const rated = JSON.parse(localStorage.getItem('ratedSoftware') || '[]');
      localStorage.setItem('ratedSoftware', JSON.stringify([...rated, id]));
    } catch (error) {
      console.error('Error updating rating:', error);
    }
  };

  if (!software) return null;
 // vi kollar om besökare har röstat, den kan ju i teorin rösta flera gånger om man orkar rensa sin local storage
  const hasRated = JSON.parse(localStorage.getItem('ratedSoftware') || '[]').includes(id);

  return (
    <section className="w-full">
      <div className="container py-24">
        <div className="bg-white rounded-3xl p-6 md:p-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12">
            {software?.icon_url && (
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl flex items-center justify-center p-2">
                <img
                  src={software.icon_url}
                  alt={`${software.title} icon`}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold text-black/90 mb-4 text-center md:text-left">
                {software.title}
              </h1>
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0 md:justify-between md:mr-6">
                <span className="inline-block border border-gray-300 text-black/60 px-6 py-2 text-base rounded-full font-medium">
                  {software.category}
                </span>
                <RatingStars
                  rating={software.average_rating}
                  total={software.total_ratings}
                  onRate={!hasRated ? handleRate : undefined}
                />
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-semibold text-black/80 mb-6">Description</h2>
            <p className="text-black/60 text-lg leading-relaxed">{software.description}</p>
          </div>

          <div className="mt-12 flex flex-col md:flex-row justify-center md:justify-between gap-4 md:gap-6">
            {software.website_url && (
              <a
                href={software.website_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#6C5CE7] text-white px-8 py-4 text-lg rounded-full hover:bg-[#6C5CE7]/90 transition-colors font-medium text-center"
              >
                Visit Website
              </a>
            )}
            <Link 
              href="/software" 
              className="inline-block bg-white text-black/80 px-8 py-4 text-lg rounded-full border border-gray-300 hover:bg-black/5 transition-colors font-medium text-center"
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