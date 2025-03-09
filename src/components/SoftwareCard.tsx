import Link from 'next/link';
import { Software } from '@/utils/supabase';

interface SoftwareCardProps {
  software: Software;
  variant?: 'large' | 'horizontal';
}

export default function SoftwareCard({ software, variant = 'large' }: SoftwareCardProps) {
  return (
    <div className={`bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-colors ${
      variant === 'large' ? 'h-[400px] flex flex-col' : 'h-[190px]'
    }`}>
      <Link href={`/software/${software.id}`} className="block h-full">
        {variant === 'horizontal' ? (
          <div className="flex items-start gap-6 h-full">
            {software.icon_url && (
              <div className="w-16 h-16 rounded-2xl bg-[#0B3B3B]/5 flex items-center justify-center p-3 shrink-0">
                <img src={software.icon_url} alt={`${software.title} icon`} className="w-full h-full object-contain" />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h2 className="text-black/90 text-2xl font-bold mb-2 truncate">{software.title}</h2>
              <p className="text-black/70 text-sm mb-2">{software.category}</p>
              <p className="text-black/50 line-clamp-2 text-sm">{software.description}</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            {software.icon_url && (
              <div className="w-20 h-20 rounded-2xl bg-[#0B3B3B]/5 flex items-center justify-center p-4">
                <img src={software.icon_url} alt={`${software.title} icon`} className="w-full h-full object-contain" />
              </div>
            )}
            <div className="flex-1 mt-6">
              <h2 className="text-black/90 text-2xl font-bold mb-3">{software.title}</h2>
              <p className="text-black/70 text-sm mb-4">{software.category}</p>
              <p className="text-black/50 line-clamp-4">{software.description}</p>
            </div>
          </div>
        )}
      </Link>
    </div>
  );
} 