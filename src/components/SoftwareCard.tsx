import Link from 'next/link';
import { Software } from '@/types/software';

// Orignal kortet som används på startsidan och i övriga delar. VI UTGÅR FRÅN DENNA!!!!!!
export function SoftwareCard({ software }: { software: Software }) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-300 h-[160px] transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
      <Link href={`/software/${software.id}`} className="block h-full">
        <div className="flex items-center gap-6 h-full">
          {software.icon_url && (
            <img 
              src={software.icon_url} 
              alt={`${software.title} icon`} 
              className="w-18 h-18 object-contain shrink-0" 
            />
          )}
          <div className="min-w-0">
            <h2 className="text-2xl font-bold mb-2 truncate">{software.title}</h2>
            <p className="text-[#0B3B3B]/80 line-clamp-2 text-sm">{software.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SoftwareCard; 