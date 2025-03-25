import { supabase } from '@/utils/supabase';

export async function subscribeToNewsletter(email: string) {
  
    const { data: existingEmail } = await supabase
    .from("newsletter") // vi hämtar vår tabell
    .select("email") // vi hämtar emailen från vår tabell
    .eq("email", email) // vi jämför emailen med vår input
    .single(); // vi vill ha en enda rad så vi kan jämföra med vår input

  if (existingEmail) {
    throw new Error("This email is already subscribed");
  }

  const { error } = await supabase
    .from("newsletter") // vi hämtar vår tabell
    .insert([{ email }]); // vi skickar in vår input jippie

  if (error) {
    console.error('Supabase error:', error);
    throw new Error("Failed to subscribe. Please try again.");
  }

  return { message: "Thank you for subscribing!" };
} 