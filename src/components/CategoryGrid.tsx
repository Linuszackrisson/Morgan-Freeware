import Link from 'next/link';
import { Code, Pencil, Camera, Music, ArrowRight } from 'lucide-react';

// vi kör med lite olika kategorier för att testa, vi kan senare lägga till fler kategorier
// men tror vi bara kör fyra för att ge en bra uppfattning om vad vi har att erbjuda
const FEATURED_CATEGORIES = [
  { 
    name: 'Development Tools', 
    icon: Code, 
    iconColor: 'text-[var(--color-primary)]',
  },
  { 
    name: 'Graphics & Design', 
    icon: Pencil, 
    iconColor: 'text-[var(--color-primary)]',
  },
  { 
    name: 'Video Editing', 
    icon: Camera, 
    iconColor: 'text-[var(--color-primary)]',
  },
  { 
    name: 'Music Production', 
    icon: Music, 
    iconColor: 'text-[var(--color-primary)]',
  }
];

export default function CategoryGrid() {
  return (
    <section className="w-full">
      <div className="container py-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">Categories</h2>
          <Link 
            href="/software" 
            className="group flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
          >
            See all categories
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_CATEGORIES.map(({ name, icon: Icon, iconColor}) => (
            <Link
              key={name}
              href={`/software?category=${encodeURIComponent(name)}`}
              className="group"
            >
              <div className="p-6 bg-[var(--color-background)] border border-[var(--color-border)] rounded-[var(--border-radius)] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                <div className={`w-12 h-12 ${iconColor} rounded-lg flex items-center justify-center mb-4 bg-[var(--color-primary-light)] border border-[var(--color-border)]`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors">{name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
