'use client';

import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="bg-white py-20 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#d04a00] mb-6">
          About B&W Forklift Training Center
        </h2>

        <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-6">
          With over 25 years of experience in forklift safety and industrial training, our instructors bring real-world knowledge from warehouses, manufacturing, and logistics environments. We deliver OSHA-compliant training with hands-on evaluations designed to prepare workers for safe, effective jobsite performance.
        </p>

        <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-6">
          From new hires to veteran operators, our programs support long-term career growth and workplace safety. All sessions follow OSHA Regulation 29 CFR 1910.178.
        </p>

        <p className="text-md md:text-lg text-gray-800 font-semibold italic mb-10">
          🇺🇸 Veteran-owned & proudly offering discounts to all U.S. military veterans.
        </p>

        <Link
          href="/about"
          className="inline-block bg-[#d04a00] hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
