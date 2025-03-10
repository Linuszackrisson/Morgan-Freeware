import Link from 'next/link';
import { Software } from '@/types/software';

interface SoftwareCardProps {
  software: Software;
  variant?: 'large' | 'horizontal';
}
// OBS: Large är dom stora korten som vi även har i software page, horizontal är dom små korten som visas på startsidan OCH SOFTWARE PAGE
export default function SoftwareCard({ software, variant = 'large' }: SoftwareCardProps) {
  return (
    <div className={`bg-white rounded-2xl p-8 border border-gray-300 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${
      variant === 'large' ? 'h-[340px] flex flex-col' : 'h-[160px]'
    }`}>
      <Link href={`/software/${software.id}`} className="block h-full">
        {variant === 'horizontal' ? (
          <div className="flex items-center gap-6 h-full">
            {software.icon_url && (
              <div className="w-18 h-18 rounded-2xl  flex items-center justify-center p-1 shrink-0">
                <img src={software.icon_url} alt={`${software.title} icon`} className="w-full h-full object-contain" />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h2 className="text-black/90 text-2xl font-bold mb-2 truncate">{software.title}</h2>
              <p className="text-[#0B3B3B]/80 line-clamp-2 text-sm">{software.description}</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col h-full">
      {software.icon_url && (
        <div className="w-24 h-24 rounded-2xl flex items-center justify-center p-1">
      <img src={software.icon_url} alt={`${software.title} icon`} className="w-full h-full object-contain" />
        </div>
      )}
      <div className="flex flex-1 flex-col justify-end mt-auto">
      < h2 className="text-black/90 text-2xl font-bold mb-3">{software.title}</h2>
        <p className="text-black/50 line-clamp-4">{software.description}</p>
        </div>
        </div>

        )}
      </Link>
    </div>
  );
} 