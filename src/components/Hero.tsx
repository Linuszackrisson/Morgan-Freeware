import Link from 'next/link';

export default function Hero() {
  return (
    <section className="w-full pt-24">
      <div className="container py-24 text-center">
        <div className="flex flex-col items-center max-w-3xl mx-auto">
          {/* Heading */}
          <h1 className="text-6xl font-bold text-[#2a7a44] mb-6">
            Make Your Wallet Happy <br></br>
            <span className="text-[#2a7a44]">Discover Free Software</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-[#0B3B3B]/70 mb-8 max-w-2xl">
            Discover the best free software alternatives for your needs. Get the same results for a fraction of the cost.
          </p>

          {/* CTA Button */}
          <button className="bg-[#2a7a44] text-white px-8 py-4 rounded-full text-lg font-semibold">
            Start Exploring
          </button>
        </div>
      </div>
    </section>
  );
} 