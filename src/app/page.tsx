import HeroSection from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import { getAllSoftware } from '@/utils/software-service';
import SoftwareGrid from '@/components/SoftwareGrid';
import NewsletterForm from '@/components/Newsletter';
import TestimonialSlider from '@/components/TestimonialSlider';
import ContactForm from '@/components/ContactForm';

export default async function Home() { // Vi använder async för att hämta våra data från vår backend
  const software = await getAllSoftware(); // hämtar ALLA våra program, som vi skickar till våran grid komponent på huvudsidan

  return (
    <main className="w-full min-h-screen relative bg-white">
      <div className="bakgrund bg-gradient-to-b from-[var(--color-background)] to-[var(--color-background-secondary)]">
        <HeroSection />
        <SoftwareGrid software={software} />
        <CategoryGrid />
        <NewsletterForm />
        <TestimonialSlider />
        <ContactForm />
      </div>
    </main>
  );
}
