import { supabase, Software } from '@/utils/supabase';

export async function getAllSoftware() {
  const { data, error } = await supabase
    .from('software')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw error;
  }

  return data;
}

export async function getSoftwareById(id: string) {
  const { data, error } = await supabase
    .from('software')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export function getUniqueCategories(software: Software[]) {
  return Array.from(new Set(software.map(item => item.category)));
}

// Helper function to filter software by category
export function filterSoftwareByCategory(software: Software[], category: string) {
  if (category === 'all') {
    return software;
  }
  return software.filter(item => item.category === category);
} 