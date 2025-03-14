import { supabase } from '@/utils/supabase';

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

export async function getSoftwareById(id: string) {
  const { data, error } = await supabase
    .from('software')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
}

export async function getCategories() {
  const { data, error } = await supabase
    .from('software')
    .select('category');

  if (error) throw error;
  return [...new Set(data.map(item => item.category))];
}

export async function updateSoftwareRating(id: string, newRating: number) {
  const { data: software } = await supabase
    .from('software')
    .select('average_rating, total_ratings')
    .eq('id', id)
    .single();

  const total = (software?.total_ratings || 0) + 1;
  const average = ((software?.average_rating || 0) * (total - 1) + newRating) / total;

  const { error } = await supabase
    .from('software')
    .update({ average_rating: average, total_ratings: total })
    .eq('id', id);

  if (error) throw error;
  return { average_rating: average, total_ratings: total };
} 