'use client';
import { useEffect, useState } from 'react';
import { Software } from '@/types/software';
import HeroSection from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import { getAllSoftware } from '@/utils/software-service';
import SoftwareGrid from '@/components/SoftwareGrid';
import NewsletterForm from '@/components/Newsletter';
import TestimonialSlider from '@/components/TestimonialSlider';
export default function Home() {
  const [software, setSoftware] = useState<Software[]>([]);

  useEffect(() => {
    getAllSoftware().then(data => {
      setSoftware(data);
    }).catch(console.error);
  }, []);

  return (
    <main className="w-full min-h-screen relative bg-white">
        <div className="bakgrund bg-gradient-to-b from-[var(--color-background)] to-[var(--color-background-secondary)]">
        <HeroSection />
        <SoftwareGrid software={software} />
        <CategoryGrid />
        <NewsletterForm />
        <TestimonialSlider />
        </div>
      </main>
  );
}
