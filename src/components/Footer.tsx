import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white py-4 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-[#1a1a1a] font-bold text-xl">
            Morgan Freeware
          </Link>
          <p className="text-[#1a1a1a]/70 text-sm">
            &copy; {new Date().getFullYear()} Morgan Freeware
          </p>
        </div>
      </div>
    </footer>
  );
} 