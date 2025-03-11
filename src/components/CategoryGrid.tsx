import Link from 'next/link';
import { Code, Pencil, Camera, Music, ArrowRight } from 'lucide-react';

// vi kör med lite olika kategorier för att testa, vi kan senare lägga till fler kategorier
// men tror vi bara kör fyra för att ge en bra uppfattning om vad vi har att erbjuda
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

export default function CategoryGrid() {
  return (
    <section className="w-full">
      <div className="container py-24">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-4xl font-bold text-black/60">Categories</h2>
          <Link 
            href="/software" 
            className="group flex items-center gap-2 text-black/60 hover:text-black/80"
          >
            See all categories
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_CATEGORIES.map(({ name, icon: Icon, iconColor, borderColor }) => (
            <Link
              key={name}
              href={`/software?category=${encodeURIComponent(name)}`}
              className="group"
            >
              <div className={`p-6 bg-white border-2 ${borderColor} rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-1`}>
                <Icon className={`w-12 h-12 mb-4 ${iconColor}`} />
                <h3 className="text-xl font-semibold text-black/80">{name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
