import Link from 'next/link';
import { Software } from '@/types/software';

export function LargeSoftwareCard({ software }: { software: Software }) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-300 h-[340px] flex flex-col transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
      <Link href={`/software/${software.id}`} className="block h-full">
        <div className="flex flex-col h-full">
          {software.icon_url && (
            <img 
              src={software.icon_url} 
              alt={`${software.title} icon`} 
              className="w-24 h-24 object-contain" 
            />
          )}
          <div className="mt-auto">
            <h2 className="text-2xl font-bold mb-3">{software.title}</h2>
            <p className="text-black/50 line-clamp-4">{software.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default LargeSoftwareCard; 