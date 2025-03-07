'use client';

import { useEffect, useState } from 'react';
import { supabase, Software } from '@/utils/supabase';

export default function Home() {
  const [software, setSoftware] = useState<Software[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSoftware() {
      try {
        const { data, error } = await supabase
          .from('software')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          throw error;
        }

        if (data) {
          setSoftware(data);
        }
      } catch (error) {
        console.error('Error fetching software:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchSoftware();
  }, []);

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Freeware Portal</h1>
      
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {software.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {item.icon_url && (
                  <img
                    src={item.icon_url}
                    alt={`${item.title} icon`}
                    className="w-12 h-12 rounded mr-4"
                  />
                )}
                <div>
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-600">{item.category}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <div className="flex gap-4">
                {item.preview_url && (
                  <a
                    href={item.preview_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Preview
                  </a>
                )}
                {item.website_url && (
                  <a
                    href={item.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Website
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
