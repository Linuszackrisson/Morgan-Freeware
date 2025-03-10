import Link from 'next/link';
import { CategoryGridProps } from '@/types/software';


export default function CategoryGrid({ categories, software }: CategoryGridProps) {
  return (
    <section className="w-full">
      <div className="container py-24">
        <h2 className="text-4xl font-bold mb-12">Browse by Category</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(category => (
            <Link
              key={category}
              href={`/software?category=${encodeURIComponent(category)}`}
            >
              <div>
                <h3 className="text-xl">{category}</h3>
                <p className="text-sm text-gray-600">
                  {software.filter(item => item.category === category).length} items
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
