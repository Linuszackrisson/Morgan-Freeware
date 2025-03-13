import Link from 'next/link';
import { Software } from '@/types/software';

// Orignal kortet som används på startsidan och i övriga delar. VI UTGÅR FRÅN DENNA!!!!!!
export function SoftwareCard({ software }: { software: Software }) {
  return (
    <div className="bg-[var(--color-background)] rounded-[var(--border-radius)] p-6 border border-[var(--color-border)] h-[160px] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group">
      <Link href={`/software/${software.id}`} className="block h-full">
        <div className="flex items-center gap-6 h-full">
          {software.icon_url && (
            <img 
              src={software.icon_url} 
              alt={`${software.title} icon`} 
              className="w-16 h-16 object-contain shrink-0" 
            />
          )}
          <div className="min-w-0">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2 truncate group-hover:text-[var(--color-primary)] transition-colors">{software.title}</h2>
            <p className="text-[var(--color-text-secondary)] line-clamp-2 text-sm leading-relaxed">{software.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SoftwareCard; 