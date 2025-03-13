"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="max-w-md mx-auto border border-[var(--color-border)] rounded-[var(--border-radius)] p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full px-4 py-2 rounded-[var(--border-radius)] border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-light)] outline-none bg-white/80 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)]"
          placeholder="Name"
        />
        
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="w-full px-4 py-2 rounded-[var(--border-radius)] border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-light)] outline-none bg-white/80 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)]"
          placeholder="Email"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows={4}
          className="w-full px-4 py-2 rounded-[var(--border-radius)] border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-light)] outline-none bg-white/80 resize-none text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)]"
          placeholder="Your message..."
        />

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSending}
            className="bg-[var(--color-primary)] text-[var(--color-background)] px-8 py-3 rounded-[var(--border-radius)] hover:opacity-90 transition-all flex items-center gap-2 disabled:opacity-50 font-medium"
          >
            {isSending ? 'Sending...' : (
              <>
                Send Message
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
