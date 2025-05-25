'use client';
import { useEffect, useRef, useState } from 'react';
import Header from '../section/Headers';
import Footer from '../section/Footer';


export default function SignUpPage() {
  const videos = [
    '/videos/forklift-clip-1.mp4',
    '/videos/forklift-clip-2.mp4',
    '/videos/forklift-clip-3.mp4',
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
  }, [index, videos.length]); // ✅ Fixes ESLint dependency warning

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

          {/* Centered Orange Box */}
          <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
            <div className="bg-[#d04a00]/80 text-white rounded-xl px-6 py-5 text-center max-w-2xl backdrop-blur-sm shadow-lg">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2">
                Book Your Forklift Certification Training
              </h1>
              <p className="text-sm md:text-base">
                Get hands-on OSHA-compliant forklift training in a real warehouse environment.
                Same-day certification, expert instruction, and fast results.
              </p>
            </div>
          </div>
        </div>

        {/* Class Info Section */}
        <section className="max-w-4xl mx-auto px-4 py-12 text-center">
          <p className="text-lg font-semibold text-[#d04a00] mb-3">
            Classes run Monday – Friday, 9:00 AM to 4:00 PM
          </p>
          <p className="text-md text-gray-700 mb-10">
            In-person training in a professional warehouse environment. Taught by OSHA-certified instructors with real-world experience.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            {/* What It Covers */}
            <div className="bg-white p-6 rounded-xl border border-orange-100 shadow-md flex flex-col justify-center text-center">
              <h3 className="text-xl font-bold text-[#d04a00] mb-4">
                What You&apos;ll Learn
              </h3>
              <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                <li>The OSHA Standard (29 CFR 1910.178)</li>
                <li>Types & characteristics of forklifts</li>
                <li>Forklift safety rules and regulations</li>
                <li>Basic driving, stability and load handling</li>
                <li>Pre-operational inspections</li>
                <li>Fuels & batteries</li>
                <li>Certification Test</li>
              </ul>
            </div>

            {/* What You Receive */}
            <div className="bg-white p-6 rounded-xl border border-orange-100 shadow-md flex flex-col justify-center text-center">
              <h3 className="text-xl font-bold text-[#d04a00] mb-4">
                After Completion
              </h3>
              <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                <li>Certificate of Training</li>
                <li>Wallet Card (valid for 3 years)</li>
              </ul>
              <div className="mt-6">
                <p className="text-md text-gray-600">Training Price:</p>
                <p className="text-2xl font-bold text-[#d04a00] mt-1">$150.00</p>
                <p className="text-sm text-gray-500">Per training day / per person</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sign-Up Form Section */}
        <section className="max-w-3xl mx-auto px-4 pb-16 text-center">
          <h3 className="text-xl font-bold text-[#d04a00] mb-4">
            Reserve Your Spot
          </h3>

          <p className="text-sm text-gray-700 mb-6 max-w-xl mx-auto">
            Fill out the form below to reserve your spot for in-person forklift certification training.
            A team member will contact you shortly to confirm your registration and provide next steps.
            <br />
            <br />
            📍 <strong>Location:</strong> B&W Forklift Training Center, Stone Mountain, GA <br />
            📅 <strong>Schedule:</strong> Monday – Friday, 9:00 AM to 4:00 PM <br />
            📞 <strong>Call/Text:</strong>{' '}
            <a href="tel:7702033337" className="text-[#d04a00] font-semibold underline">
              (770) 203-3337
            </a>
          </p>

          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSck55r5RqtcgjJWio1_q_FxISVyQqmBT9ARJIS4_i6VimmucQ/viewform?embedded=true"
            width="100%"
            height="992"
            className="rounded-xl border shadow-md"
            loading="lazy"
          >
            Loading…
          </iframe>
        </section>
      </main>
      <Footer />
    </>
  );
}
