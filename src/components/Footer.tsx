import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-emerald-500 font-bold text-xl">
              Freeware Portal
            </Link>
            <p className="mt-2 text-zinc-400">
              Find the best free software alternatives.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-white mb-2">Navigation</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-zinc-400">Home</Link></li>
                <li><Link href="/software" className="text-zinc-400">Software</Link></li>
                <li><Link href="/our-choice" className="text-zinc-400">Our Choice</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white mb-2">Information</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-zinc-400">About</Link></li>
                <li><Link href="/contact" className="text-zinc-400">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-zinc-800 text-zinc-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Freeware Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 