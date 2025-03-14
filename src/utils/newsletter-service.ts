import { supabase } from '@/utils/supabase';

export async function subscribeToNewsletter(email: string) {
  
    const { data: existingEmail } = await supabase
    .from("newsletter")
    .select("email")
    .eq("email", email)
    .single();

  if (existingEmail) {
    throw new Error("This email is already subscribed");
  }

  const { error } = await supabase
    .from("newsletter")
    .insert([{ email }]);

  if (error) {
    console.error('Supabase error:', error);
    throw new Error("Failed to subscribe. Please try again.");
  }

  return { message: "Thank you for subscribing!" };
} 