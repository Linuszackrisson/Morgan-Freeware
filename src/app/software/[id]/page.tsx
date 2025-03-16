import { getSoftwareById, getAllSoftware } from '@/utils/software-service';
import { SoftwareCard } from '@/components/SoftwareCard';
import { SoftwareRating } from '@/components/SoftwareRating';
import Link from 'next/link';

interface PageProps {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateStaticParams() {
  const software = await getAllSoftware();
  
  return software.map((item) => ({
    id: item.id.toString(),
  }));
}

export default async function SoftwarePage({ params }: PageProps) {
  const software = await getSoftwareById(params.id);
  
  if (!software) {
    return <div>Software not found</div>;
  }

  // Hämta relaterad programvara
  const allSoftware = await getAllSoftware(software.category);
  const relatedSoftware = allSoftware
    .filter(s => s.id !== software.id)
    .slice(0, 4);

  return (
    <section className="w-full">
      <div className="container py-24">
        <div className="bg-white rounded-[var(--border-radius)] p-6 md:p-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12">
            {software?.icon_url && (
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-[var(--border-radius)] flex items-center justify-center p-2">
                <img
                  src={software.icon_url}
                  alt={`${software.title} icon`}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-4 text-center md:text-left">
                {software.title}
              </h1>
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <span className="inline-block border border-[var(--color-border)] text-[var(--color-text-secondary)] px-6 py-2 text-base rounded-[var(--border-radius)] font-medium">
                  {software.category}
                </span>
                <SoftwareRating
                  softwareId={software.id}
                  initialRating={software.average_rating}
                  totalRatings={software.total_ratings}
                />
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">Description</h2>
            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">{software.description}</p>
          </div>

          <div className="flex gap-4 mt-8">
            {software.website_url && (
              <a
                href={software.website_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-primary)] text-[var(--color-background)] px-8 py-4 text-lg rounded-[var(--border-radius)] hover:opacity-90 transition-colors font-medium text-center"
              >
                Visit Website
              </a>
            )}
            <Link 
              href="/software" 
              className="inline-block bg-white text-[var(--color-text-secondary)] px-8 py-4 text-lg rounded-[var(--border-radius)] border border-[var(--color-border)] hover:bg-black/5 transition-colors font-medium text-center"
            >
              Back to Software
            </Link>
          </div>
        </div>
      </div>

      {relatedSoftware.length > 0 && (
        <div className="container py-16">
          <h2 className="text-4xl font-bold text-[var(--color-text-primary)] mb-8">Related Software</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {relatedSoftware.map((item) => (
              <SoftwareCard key={item.id} software={item}/>
            ))}
          </div>
        </div>
      )}
    </section>
  );
} 