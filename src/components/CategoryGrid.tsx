import Link from 'next/link';
import { Software } from '@/types/software';
import { Code, Pencil, Camera, Music, ArrowRight } from 'lucide-react';

// Konfigurera kategorier med ikoner och färger
const FEATURED_CATEGORIES = [
  { 
    name: 'Development Tools', 
    icon: Code, 
    iconColor: 'text-[#2196F3]',
    borderColor: 'border-[#2196F3]'
  },
  { 
    name: 'Graphics & Design', 
    icon: Pencil, 
    iconColor: 'text-[#4CAF50]',
    borderColor: 'border-[#4CAF50]'
  },
  { 
    name: 'Video Editing', 
    icon: Camera, 
    iconColor: 'text-[#FFC107]',
    borderColor: 'border-[#FFC107]'
  },
  { 
    name: 'Music Production', 
    icon: Music, 
    iconColor: 'text-[#FF5722]',
    borderColor: 'border-[#FF5722]'
  }
];

export default function CategoryGrid({ software }: { software: Software[] }) {
  return (
    <section className="w-full">
      <div className="container py-24">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-bold text-black/80">Categories</h2>
          <Link 
            href="/software" 
            className="group flex items-center gap-2 text-black/60 hover:text-black/80"
          >
            See all categories
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_CATEGORIES.map(({ name, icon: Icon, iconColor, borderColor }) => {
            const itemCount = software.filter(item => 
              item.category.toLowerCase() === name.toLowerCase()
            ).length;

            return (
              <Link
                key={name}
                href={`/software?category=${encodeURIComponent(name)}`}
                className="group"
              >
                <div className={`p-6 bg-white border-2 ${borderColor} rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-1`}>
                  <Icon className={`w-12 h-12 mb-4 ${iconColor}`} />
                  <h3 className="text-xl font-semibold text-black/80">{name}</h3>
                  <p className="text-sm text-black/60">
                    {itemCount} items
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
