'use client';
import { useEffect, useRef, useState } from 'react';
import Header from '../section/Headers';
import Link from 'next/link';
import Footer from '../section/Footer';

export default function ScissorBoomTrainingPage() {
  const videos = [
    '/videos/scissor-boom-1.mp4',
    '/videos/scissor-boom-2.mp4',
    '/videos/scissor-boom-3.mp4',
  ];
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleEnded = () => {
      setIndex((prev) => (prev + 1) % videos.length);
    };

    const video = videoRef.current;
    if (video) {
      video.addEventListener('ended', handleEnded);
      return () => video.removeEventListener('ended', handleEnded);
    }
  }, [index, videos.length]);

  return (
    <>
      <Header />

      <main className="bg-white text-gray-800">
        {/* Hero Video Section */}
        <div className="relative h-[60vh] w-full overflow-hidden">
          <video
            key={index}
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videos[index]} type="video/mp4" />
          </video>

          {/* Orange Text Box Overlay */}
          <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
            <div className="bg-[#d04a00]/80 text-white rounded-xl px-6 py-5 text-center max-w-2xl backdrop-blur-sm shadow-lg">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2">
                Scissor & Boom Lift Training
              </h1>
              <p className="text-sm md:text-base">
                Hands-on instruction for vertical and articulating lifts. Learn with real equipment in OSHA-compliant environments.
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <section className="bg-white px-4 py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#d04a00] mb-4">
            Real Equipment. Real Safety. Real Certification.
          </h2>
          <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto mb-12">
            Our Scissor and Boom Lift Training course offers hands-on, instructor-led practice on-site.
            Whether you&apos;re preparing your maintenance team or certifying new employees, this course ensures your workforce is ready and compliant with OSHA 29 CFR 1926.453 and ANSI A92.22 safety standards.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-xl border border-orange-100 shadow-md">
                <h3 className="text-xl font-bold text-[#d04a00] mb-4">Training Schedule</h3>
                <p className="text-gray-700">Monday – Friday</p>
                <p className="text-gray-700">9:00 AM – 4:00 PM</p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-orange-100 shadow-md">
                <h3 className="text-xl font-bold text-[#d04a00] mb-4">Price</h3>
                <p className="text-3xl font-bold text-[#d04a00]">$150.00</p>
                <p className="text-sm text-gray-600 mt-2">Per person / per day</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#d04a00] mb-4">Training Covers:</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-8">
              <li>✓ Safe operation of scissor and boom lifts</li>
              <li>✓ Vertical lift & articulating lift use</li>
              <li>✓ Harness use and fall protection</li>
              <li>✓ Pre-operation inspections</li>
              <li>✓ Jobsite hazard awareness</li>
              <li>✓ Hands-on evaluation with real equipment</li>
            </ul>

            <p className="text-sm text-gray-600 italic mb-12">
              OSHA Standard: 29 CFR 1926.453 & ANSI A92.22 compliance.
            </p>

            {/* CTA */}
            <Link
              href="/sign-up"
              className="inline-block bg-[#d04a00] hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition"
            >
              Book Lift Training
            </Link>

            {/* Contact Info */}
            <div className="mt-10 text-sm text-gray-700">
              <p className="mb-1">For group bookings or corporate sessions:</p>
              <p>
                📞{' '}
                <a href="tel:7702033337" className="text-[#d04a00] font-semibold underline">
                  (770) 203-3337
                </a>{' '}
                | 📧{' '}
                <a
                  href="mailto:bwforklifttraining@gmail.com"
                  className="text-[#d04a00] font-semibold underline"
                >
                  bwforklifttraining@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
