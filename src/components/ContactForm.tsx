"use client";
import { useState } from "react";
import { MessageCircle } from "lucide-react";

/* 
Denna komponenten är likt newsletter en av få komponenter som måste köras i client.
Det är för att vi har useState som måste köras i client. eftersom vi uppdaterar formuläret.
innan vi skickar tillbaka till servern.
*/

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setFormData({ name: '', email: '', message: '' });
      setMessage('Thank you for your message!');
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="w-full py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-4 flex flex-col items-center justify-center">
        <div className="w-14 h-14 rounded-lg bg-[var(--color-primary-light)] flex items-center justify-center border border-[var(--color-border)] mb-6">
          <MessageCircle className="w-7 h-7 text-[var(--color-primary)]" />
        </div>
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
            We would love to hear from you
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-xl leading-relaxed mb-8">
            Have any questions or suggestions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="w-full max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-[var(--border-radius)] border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-light)] outline-none bg-white text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)]"
              placeholder="Name"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-[var(--border-radius)] border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-light)] outline-none bg-white text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)]"
              placeholder="Email"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-[var(--border-radius)] border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-light)] outline-none bg-white resize-none text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)]"
              placeholder="Message"
            />

            {message && (
              <p className={`text-base ${message.includes('wrong') ? 'text-red-500' : 'text-green-500'}`}>
                {message}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-[var(--color-primary)] text-[var(--color-background)] px-8 py-4 rounded-[var(--border-radius)] hover:opacity-90 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
