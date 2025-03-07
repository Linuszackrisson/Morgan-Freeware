import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zppjmjvidzqpcnshhwop.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwcGptanZpZHpxcGNuc2hod29wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyOTkxNjQsImV4cCI6MjA1Njg3NTE2NH0.FOOD0IKLw5Cyv34zRpGXvVWPJ1BpyiJYs60jxZARe2Y';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Types based on your database schema
export interface Software {
  id: string;
  title: string;
  category: string;
  description: string;
  icon_url: string;
  preview_url: string;
  website_url: string;
  created_at: string;
} 