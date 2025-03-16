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

export async function rateSoftware(softwareId: string, rating: number) {
  // Hämta nuvarande software data
  const { data: software, error: fetchError } = await supabase
    .from('software')
    .select('total_ratings, average_rating')
    .eq('id', softwareId)
    .single();

  if (fetchError) throw fetchError;

  // Beräkna ny genomsnittlig rating
  const currentTotal = software.total_ratings || 0;
  const currentAverage = software.average_rating || 0;
  const newTotal = currentTotal + 1;
  const newAverage = ((currentAverage * currentTotal) + rating) / newTotal;

  // Uppdatera software med ny rating
  const { error: updateError } = await supabase
    .from('software')
    .update({
      total_ratings: newTotal,
      average_rating: newAverage
    })
    .eq('id', softwareId);

  if (updateError) throw updateError;

  return {
    success: true,
    newAverage: newAverage,
    totalRatings: newTotal
  };
} 