'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { supabase, Software } from '@/utils/supabase';

export default function SoftwareDetail() {
  const { id } = useParams();
  const [software, setSoftware] = useState<Software | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSoftware() {
      try {
        const { data, error } = await supabase
          .from('software')
          .select('*')
          .eq('id', id)
          .single();

        if (error) {
          throw error;
        }

        setSoftware(data);
      } catch (error) {
        console.error('Error fetching software:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchSoftware();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="w-12 h-12 border-2 border-emerald-500 border-t-transparent mx-auto animate-spin"></div>
            <p className="mt-4 text-zinc-400">Loading software details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!software) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">Software Not Found</h1>
          <Link href="/software" className="text-emerald-500">
            ← Back to Software
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/software" className="text-emerald-500">
            ← Back to Software
          </Link>
        </div>

        <div className="bg-zinc-900 p-8">
          <div className="flex items-start gap-8">
            {software.icon_url && (
              <img
                src={software.icon_url}
                alt={`${software.title} icon`}
                className="w-24 h-24"
              />
            )}
            <div>
              <h1 className="text-4xl font-bold mb-2">{software.title}</h1>
              <span className="inline-block bg-zinc-800 px-3 py-1 text-sm text-zinc-300">
                {software.category}
              </span>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <p className="text-zinc-300">{software.description}</p>
          </div>

          <div className="mt-8 flex gap-4">
            {software.preview_url && (
              <a
                href={software.preview_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 text-white px-6 py-3"
              >
                Preview Software
              </a>
            )}
            {software.website_url && (
              <a
                href={software.website_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-800 text-white px-6 py-3"
              >
                Visit Website
              </a>
            )}
          </div>

          <div className="mt-8 text-sm text-zinc-500">
            Added on {new Date(software.created_at).toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
} 