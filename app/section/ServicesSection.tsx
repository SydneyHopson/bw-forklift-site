'use client';
import Link from 'next/link';

export default function ServicesSection() {
  return (
    <section className="bg-[#d04a00] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-sm mb-16">
          Training Programs We Offer
        </h2>

        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Forklift Certification */}
          <div className="bg-white text-center rounded-2xl p-8 shadow-md hover:shadow-xl transition border border-orange-100">
            <h3 className="text-2xl font-bold text-[#d04a00] mb-4">Forklift Certification</h3>
            <p className="text-sm text-gray-700 mb-4">
              OSHA-compliant classroom training for experienced operators. Available for corporate groups.
            </p>
            <ul className="text-sm text-gray-600 list-none space-y-1 mb-6">
              <li>Reach Truck</li>
              <li>Electric Pallet Jack</li>
              <li>Counterbalance Forklift</li>
              <li>Electric Forklift</li>
              <li>Order Picker</li>
            </ul>
            <Link
              href="/sign-up"
              className="inline-block bg-[#d04a00] hover:bg-orange-700 text-white font-semibold py-2 px-5 rounded-lg transition"
            >
              Book In-Person Training
            </Link>
          </div>

          {/* Online Re-Certification */}
          <div className="bg-white text-center rounded-2xl p-8 shadow-md hover:shadow-xl transition border border-orange-100">
            <h3 className="text-2xl font-bold text-[#d04a00] mb-4">Online Re-Certification</h3>
            <p className="text-sm text-gray-700 mb-6">
              Quick online renewal for previously certified forklift operators. Available in Spanish.
            </p>
            <p className="text-sm text-gray-700 mb-6">
              Price: $49.50
            </p>
            <Link
              href="/re-certify"
              className="inline-block bg-[#d04a00] hover:bg-orange-700 text-white font-semibold py-2 px-5 rounded-lg transition"
            >
              Start Online Renewal
            </Link>
          </div>

          {/* Scissor & Boom Lift Training */}
          <div className="bg-white text-center rounded-2xl p-8 shadow-md hover:shadow-xl transition border border-orange-100">
            <h3 className="text-2xl font-bold text-[#d04a00] mb-4">Scissor & Boom Lift Training</h3>
            <p className="text-sm text-gray-700 mb-6">
              Hands-on training for vertical and articulating lifts. Ideal for maintenance and facility teams.
            </p>
            <Link
              href="/book-training"
              className="inline-block bg-[#d04a00] hover:bg-orange-700 text-white font-semibold py-2 px-5 rounded-lg transition"
            >
              Book Lift Training
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
