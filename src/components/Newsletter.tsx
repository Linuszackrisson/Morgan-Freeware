'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setMessage(data.message || data.error);
      if (res.ok) {
        setEmail('');
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-16 md:py-">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-full bg-[#6C5CE7]/10 flex items-center justify-center">
              <Mail className="w-7 h-7 text-[#6C5CE7]" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-2">Don't miss out on the latest updates</h2>
              <p className="text-lg text-gray-600 max-w-xl">
                We are adding new software every week, so you don't want to miss out on the latest updates.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="w-full max-w-2xl">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-[#6C5CE7] outline-none text-gray-600 text-lg placeholder:text-gray-400"
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#6C5CE7] text-white px-8 py-4 rounded-xl hover:bg-[#6C5CE7]/90 transition-all disabled:opacity-50 whitespace-nowrap text-lg font-semibold shadow-lg shadow-[#6C5CE7]/20 hover:shadow-xl hover:shadow-[#6C5CE7]/30"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
              </button>
            </div>
            {message && (
              <p className={`mt-4 text-base ${message.includes('error') ? 'text-red-500' : 'text-green-500'}`}>
                {message}
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}
