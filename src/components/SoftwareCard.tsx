import Link from 'next/link';
import { Software } from '@/utils/supabase';

interface SoftwareCardProps {
  software: Software;
}

export default function SoftwareCard({ software }: SoftwareCardProps) {
  return (
    <div className="bg-zinc-900 p-6 group cursor-pointer">
      <Link href={`/software/${software.id}`} className="block">
        <div className="flex items-center mb-4">
          {software.icon_url && (
            <img
              src={software.icon_url}
              alt={`${software.title} icon`}
              className="w-12 h-12 mr-4"
            />
          )}
          <div>
            <h2 className="text-xl font-semibold group-hover:text-emerald-500 transition-colors">
              {software.title}
            </h2>
            <p className="text-zinc-400">{software.category}</p>
          </div>
        </div>
        <p className="text-zinc-300 mb-4">{software.description}</p>
      </Link>
      <div className="flex gap-4">
        {software.preview_url && (
          <a
            href={software.preview_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-500"
            onClick={(e) => e.stopPropagation()}
          >
            Preview
          </a>
        )}
        {software.website_url && (
          <a
            href={software.website_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-500"
            onClick={(e) => e.stopPropagation()}
          >
            Website
          </a>
        )}
      </div>
    </div>
  );
} 