'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setEmail('');
      setMessage('Thank you for subscribing!');
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="w-full py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-lg bg-[var(--color-primary-light)] flex items-center justify-center border border-[var(--color-border)]">
              <Mail className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">Don't miss out on the latest updates</h2>
              <p className="text-lg text-[var(--color-text-secondary)] max-w-xl leading-relaxed">
                We are adding new software every week, so you don't want to miss out on the latest updates.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="w-full max-w-xl">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 rounded-[var(--border-radius)] border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-light)] outline-none text-[var(--color-text-primary)] text-lg placeholder:text-[var(--color-text-secondary)] transition-all"
              />
              <button
                type="submit"
                className="bg-[var(--color-primary)] text-[var(--color-background)] px-8 py-4 rounded-[var(--border-radius)] hover:opacity-90 transition-all duration-300 whitespace-nowrap text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Subscribe Now
              </button>
            </div>
            {message && (
              <p className={`mt-4 text-base ${message.includes('wrong') ? 'text-red-500' : 'text-green-500'}`}>
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
