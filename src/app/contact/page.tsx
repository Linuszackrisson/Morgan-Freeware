'use client';

import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <section className="w-full min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">Get in Touch</h1>
          <p className="text-[var(--color-text-secondary)]">
            Have any questions or suggestions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
} 


 
