'use client';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "David Tapio",
    role: "Waste Management Techniques",
    image: "https://media.discordapp.net/attachments/275901933607452674/1350215111683342386/IMG_3269.jpg?ex=67d5ed50&is=67d49bd0&hm=5d7b8fd110cd72e56de0bc609b7ea13f071181558b6be5d0d26cd87d3ce72185&=&format=webp",
    text: "I used to spend around 500 dollars a month on paid services, but after discovering Morgan Freeware, I spend zero."
  },
  {
    name: "Marcus Jansson",
    role: "Average Monster Enjoyer",
    image: "https://media.discordapp.net/attachments/275901933607452674/1350215112190988398/IMG_3268.jpg?ex=67d5ed50&is=67d49bd0&hm=ef87e16dd256825cfa15dc6088e462fb912913ddaef01be3086c3daa0c222fd5&=&format=webp&width=928&height=1237",
    text: "I used to pirate all my software. Nowadays, I pirate and use free alternatives."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] text-center mb-12">
        How We Make a Difference
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-[var(--color-background)] border border-solid border-[var(--color-border)] rounded-2xl p-6"
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className="relative mb-4">
                  <img 
                    className="w-32 h-32 rounded-full object-cover ring-4 ring-[var(--color-primary-light)]" 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                  />
                </div>
                <div className="grid gap-1">
                  <h5 className="text-xl font-medium text-[var(--color-text-primary)]">{testimonial.name}</h5>
                  <span className="text-sm text-[var(--color-text-secondary)]">{testimonial.role}</span>
                </div>
              </div>
              <div className="flex items-center justify-center mb-6 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[var(--color-primary)] text-[var(--color-primary)]" />
                ))}
              </div>
              <p className="text-base text-center text-[var(--color-text-secondary)] leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 