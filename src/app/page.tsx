'use client';
import { useEffect, useState } from 'react';
import { Software } from '@/types/software';
import HeroSection from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import { getAllSoftware, getUniqueCategories } from '@/app/api/software/route';
import SoftwareGrid from '@/components/SoftwareGrid';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  const [software, setSoftware] = useState<Software[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    getAllSoftware().then(data => {
      setSoftware(data);
      setCategories(getUniqueCategories(data));
    }).catch(console.error);
  }, []);

  return (
    <main className="w-full min-h-screen relative bg-white">
      {/* Rutnät för att få till lite liv på sidan, såg livlöst ut innan*/}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            radial-gradient(circle at center, rgba(99, 102, 241, 0.05) 0, transparent 2px)
          `,
          backgroundSize: `
            80px 80px,
            80px 80px,
            16px 16px
          `,
          backgroundPosition: `
            -40px -40px,
            -40px -0px,
            -8px -8px
          `,
          zIndex: 0
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent" style={{ zIndex: 0 }} />
      
      <div className="relative z-1">
        <HeroSection />
        
        <SoftwareGrid software={software} />

        <CategoryGrid />
        <ContactForm />
      </div>
    </main>
  );
}
