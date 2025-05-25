'use client';

import Footer from '../section/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../section/Headers';

export default function ServicesPage() {
  return (
    <>
      <Header />

      {/* Hero Video Section */}
      <section className="relative h-[60vh] w-full overflow-hidden text-white">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/about-hero-3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Hero Content with transparent backdrop */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
          <div className="bg-[#d04a00]/80 text-white rounded-xl px-6 py-5 text-center max-w-2xl backdrop-blur-sm shadow-lg">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
              Our Training Services
            </h1>
            <p className="text-base md:text-lg">
              Hands-on and online programs designed to meet OSHA standards and prepare you for safe, confident forklift operation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section (White Background) */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#d04a00] drop-shadow-sm mb-16">
            Training Programs We Offer
          </h2>

          <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Forklift Certification */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white text-center rounded-2xl p-8 shadow-md hover:shadow-xl border border-orange-100"
            >
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
            </motion.div>

            {/* Online Re-Certification */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white text-center rounded-2xl p-8 shadow-md hover:shadow-xl border border-orange-100"
            >
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
            </motion.div>

            {/* Scissor & Boom Lift Training */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white text-center rounded-2xl p-8 shadow-md hover:shadow-xl border border-orange-100"
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
