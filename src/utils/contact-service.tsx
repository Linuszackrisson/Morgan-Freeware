import { supabase } from '@/utils/supabase';
import { ContactFormData } from '@/types/contact';

export const contactService = {
  async submitContactForm(data: ContactFormData) {
    try {
      const { error } = await supabase
        .from('contact')
        .insert([data]);

      if (error) {
        throw new Error(error.message);
      }

      return { success: true, message: 'Thank you for your message!' };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Something went wrong' 
      };
    }
  }
}; 