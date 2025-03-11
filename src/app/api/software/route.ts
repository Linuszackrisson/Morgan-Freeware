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