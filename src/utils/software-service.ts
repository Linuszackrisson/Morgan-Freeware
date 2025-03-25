import { supabase } from '@/utils/supabase'; // Importerar supabase-klienten, inget konstigt. 

// Hämtar ALLA programmen, används i software page där vi visar alla program.
export async function getAllSoftware(category?: string) {
  const query = supabase
    .from('software') // vi väler/hämtar vår tabell från supabase
    .select('*') // vi fäljer 
    .order('created_at', { ascending: false });

  if (category && category !== 'all') {
    query.eq('category', category);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data;
}

// Hämtar ett program med ett specifikt id
export async function getSoftwareById(id: string) { // vi skickar med vår id från vår software page
  const { data, error } = await supabase
    .from('software') // vi väljer/hämtar vår tabell från supabase
    .select('*') // vi väljer allt från vår tabell, dvs alla kolumner
    .eq('id', id) // vi matchar raden där id är lika med det vi skickar med. eq = equal. Var tydligen standard.
    .single(); // vi vill ha en enda rad så vi kan jämföra med vår input

  if (error) throw error;
  return data;
}
// hämtar program per kategori 
export async function getCategories() {
  const { data, error } = await supabase
    .from('software') // vi väljer/hämtar vår tabell från supabase
    .select('category'); // vi väljer kolumnen category

  if (error) throw error;
  return [...new Set(data.map(item => item.category))]; // vi returnerar en array med kategorier
}

export async function rateSoftware(softwareId: string, rating: number) {
  const { error } = await supabase
    .from('software') // vi väljer/hämtar vår tabell från supabase
    .update({ rating }) // vi uppdaterar vår rating
    .eq('id', softwareId); // vi matchar raden där id är lika med det vi skickar.

  if (error) throw error;

  return { success: true };
} 