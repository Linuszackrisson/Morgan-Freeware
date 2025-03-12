import { supabase } from '@/utils/supabase';
import { Software } from '@/types/software';
// Hämtar alla program från vår databas, vi typar interface för software i supabase.ts 
// Sorterar även i fallande ordning, så senaste programmet visas först, det är viktigt för vi ska ha en "recently added" sektion senare.
export async function getAllSoftware(category?: string) {
  const query = supabase
    .from('software')
    .select('*')
    .order('created_at', { ascending: false });

  if (category && category !== 'all') {
    query.eq('category', category);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data;
}
// hämtar specifikt program baserat på ID!!!!
export async function getSoftwareById(id: string) {
  const { data, error } = await supabase
    .from('software')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
}

// hämtar alla kategorier från databasen
export async function getCategories() {
  const { data, error } = await supabase
    .from('software')
    .select('category');

  if (error) throw error;
  return [...new Set(data.map(item => item.category))];
}

// Uppdaterar rating för specifik software på vår detaljerade lista
export async function updateSoftwareRating(id: string, newRating: number) {
  // Hämta nuvarande ratings
  const { data: software } = await supabase
    .from('software')
    .select('average_rating, total_ratings')
    .eq('id', id)
    .single();

  // Beräknar värdet för det nya genomsnittet, skitcoolt
  const total = (software?.total_ratings || 0) + 1;
  const average = ((software?.average_rating || 0) * (total - 1) + newRating) / total;

  // Uppdaterar slutligen vår databas med det nya värdet
  // Tur internet finns, det fanns en massa olika sätt att göra detta, men jag tyckte detta var det enklaste
  const { error } = await supabase
    .from('software')
    .update({ average_rating: average, total_ratings: total })
    .eq('id', id);

  if (error) throw error;
  return { average_rating: average, total_ratings: total };
} 