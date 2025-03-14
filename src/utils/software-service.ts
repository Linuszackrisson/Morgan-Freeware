import { supabase } from '@/utils/supabase'; // Importerar supabase-klienten, inget konstigt. 

// Hämtar ALLA programmen, används i software page där vi visar alla program.
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

// Hämtar ett program med ett specifikt id
export async function getSoftwareById(id: string) {
  const { data, error } = await supabase
    .from('software')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
}
// hämtar program per kategori 
export async function getCategories() {
  const { data, error } = await supabase
    .from('software')
    .select('category');

  if (error) throw error;
  return [...new Set(data.map(item => item.category))];
} 