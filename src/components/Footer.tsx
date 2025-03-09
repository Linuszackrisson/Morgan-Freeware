import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2a7a44] py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white font-bold text-xl">
            Morgan Freeware
          </Link>
          <p className="text-white/80 text-sm">
            &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
} 