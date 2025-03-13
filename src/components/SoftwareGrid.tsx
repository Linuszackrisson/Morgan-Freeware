import Link from 'next/link';
import { Software } from '@/types/software';
import { ArrowRight } from 'lucide-react';
import { SoftwareCard } from '@/components/SoftwareCard';
import { LargeSoftwareCard } from '@/components/LargeSoftwareCard';
// Vi kan manuellt välja vilka vi vill visa på startsidan, jag valde dom jag tyckte hade snyggast icon och passade bäst :)
export default function SoftwareGrid({ software }: { software: Software[] }) {
  if (software.length < 24) return null; // Vi behövde tydligen en säkerhetskontroll efterom vi vill specifikt visa dessa utvalda kort.

  return (
    <section className="w-full">
      <div id="software-section" className="container py-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">Software</h2>
          <Link 
            href="/software" 
            className="group flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
          >
            See all software
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
          <div className="md:col-span-3">
            <div className="block md:hidden">
              <SoftwareCard software={software[7]} />
            </div>
            <div className="hidden md:block"> 
              <LargeSoftwareCard software={software[7]} />
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="grid gap-6">
              <SoftwareCard software={software[6]} />
              <SoftwareCard software={software[10]} />
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="block md:hidden">
              <SoftwareCard software={software[18]} />
            </div>
            <div className="hidden md:block">
              <LargeSoftwareCard software={software[18]} />
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="grid gap-6">
              <SoftwareCard software={software[2]} />
              <SoftwareCard software={software[9]} />
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="block md:hidden">
              <SoftwareCard software={software[23]} />
            </div>
            <div className="hidden md:block">
              <LargeSoftwareCard software={software[23]} />
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="block md:hidden">
              <SoftwareCard software={software[11]} />
            </div>
            <div className="hidden md:block">
              <LargeSoftwareCard software={software[11]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}