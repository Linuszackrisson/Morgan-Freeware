'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "David Tapio",
    role: "High Warlord",
    image: "https://media.discordapp.net/attachments/275901933607452674/1350215111683342386/IMG_3269.jpg?ex=67d5ed50&is=67d49bd0&hm=5d7b8fd110cd72e56de0bc609b7ea13f071181558b6be5d0d26cd87d3ce72185&=&format=webp",
    text: "I used to spend around 500 dollars a month on paid services, but after discovering Morgan Freeware, I spend zero."
  },
  {
    name: "Marcus Jansson",
    role: "Average Monster Enjoyer",
    image: "https://media.discordapp.net/attachments/275901933607452674/1350215112190988398/IMG_3268.jpg?ex=67d5ed50&is=67d49bd0&hm=ef87e16dd256825cfa15dc6088e462fb912913ddaef01be3086c3daa0c222fd5&=&format=webp&width=928&height=1237",
    text: "I used to pirate all my software. Nowadays, I pirate and use free alternatives."
  },
  {
    name: "David Tapio",
    role: "High Warlord",
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

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 max-w-sm sm:max-w-2xl lg:max-w-full mx-auto">
          <div className="w-full lg:w-2/5">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] leading-tight mb-8">
              10k+ Users Found a Free{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-primary)]">
                Alternative
              </span>
            </h2>
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={prevSlide}
                className="group flex justify-center items-center bg-[var(--color-background)] border border-solid border-[var(--color-border)] w-10 h-10 transition-all duration-300 rounded-[var(--border-radius)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-light)] active:scale-95"
                disabled={isAnimating}
              >
                <ChevronLeft className="h-5 w-5 text-[var(--color-text-secondary)] group-hover:text-[var(--color-primary)] transition-colors duration-300" />
              </button>
              <button 
                onClick={nextSlide}
                className="group flex justify-center items-center bg-[var(--color-background)] border border-solid border-[var(--color-border)] w-10 h-10 transition-all duration-300 rounded-[var(--border-radius)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-light)] active:scale-95"
                disabled={isAnimating}
              >
                <ChevronRight className="h-5 w-5 text-[var(--color-text-secondary)] group-hover:text-[var(--color-primary)] transition-colors duration-300" />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-3/5">
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="w-full flex-shrink-0 px-2"
                  >
                    <div className="group bg-[var(--color-background)] border border-solid border-[var(--color-border)] rounded-2xl p-6 transition-all duration-500 hover:border-[var(--color-primary)] hover:shadow-lg">
                      <div className="flex items-center gap-5 mb-5 sm:mb-9">
                        <div className="relative">
                          <img 
                            className="w-12 h-12 rounded-full object-cover ring-2 ring-[var(--color-primary-light)]" 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                          />
                          
                        </div>
                        <div className="grid gap-1">
                          <h5 className="text-base font-medium text-[var(--color-text-primary)] transition-all duration-500">{testimonial.name}</h5>
                          <span className="text-sm text-[var(--color-text-secondary)]">{testimonial.role}</span>
                        </div>
                      </div>
                      <div className="flex items-center mb-5 sm:mb-9 gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[var(--color-primary)] text-[var(--color-primary)]" />
                        ))}
                      </div>
                      <p className="text-base text-[var(--color-text-secondary)] leading-relaxed transition-all duration-500 min-h-24 group-hover:text-[var(--color-text-primary)]">
                        {testimonial.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (isAnimating) return;
                      setIsAnimating(true);
                      setCurrentIndex(index);
                      setTimeout(() => setIsAnimating(false), 300);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-[var(--color-primary)] w-4' 
                        : 'bg-[var(--color-border)] hover:bg-[var(--color-primary-light)]'
                    }`}
                    disabled={isAnimating}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 