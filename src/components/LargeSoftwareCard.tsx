import Link from 'next/link';
import { Software } from '@/types/software';

export function LargeSoftwareCard({ software }: { software: Software }) {
  return (
    <div className="bg-[var(--color-background)] rounded-lg p-6 border border-[var(--color-border)] h-[340px] flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group">
      <Link href={`/software/${software.id}`} className="block h-full">
        <div className="flex flex-col h-full">
          {software.icon_url && (
            <img 
              src={software.icon_url} 
              alt={`${software.title} icon`} 
              className="w-20 h-20 object-contain mb-4" 
            />
          )}
          <div className="mt-auto">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">{software.title}</h2>
            <p className="text-[var(--color-text-secondary)] line-clamp-4 leading-relaxed">{software.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default LargeSoftwareCard; 