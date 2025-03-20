import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white py-4 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-[var(--color-text-primary)]">
            <Image src="/assets/icon.svg" alt="Morgan Freeman Logo" width={24} height={24} />
            <span className="font-bold text-xl font-[var(--font-orbitron)]">
              Morgan Freeman
            </span>
          </Link>
          <p className="text-[var(--color-text-secondary)] text-sm">
            &copy; {new Date().getFullYear()} Morgan Freeman
          </p>
        </div>
      </div>
    </footer>
  );
} 