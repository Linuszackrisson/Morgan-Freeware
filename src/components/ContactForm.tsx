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
    <div className="max-w-md mx-auto border border-gray-300 rounded-2xl p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-[#6C5CE7] outline-none bg-white/80"
          placeholder="Name"
        />
        
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-[#6C5CE7] outline-none bg-white/80"
          placeholder="Email"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows={4}
          className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-[#6C5CE7] outline-none bg-white/80 resize-none"
          placeholder="Your message..."
        />

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSending}
            className="bg-[#6C5CE7] text-white px-8 py-3 rounded-full hover:bg-[#6C5CE7]/80 transition-all flex items-center gap-2 disabled:opacity-50 font-medium"
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
