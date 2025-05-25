'use client';
import { useEffect, useRef, useState } from 'react';
import Header from '../section/Headers';
import Link from 'next/link';
import Footer from '../section/Footer';

export default function ReCertifyPage() {
  const videos = [
    '/videos/recertify-clip-1.mp4',
    '/videos/recertify-clip-2.mp4',
  ];
  const [index, setIndex] = useState(0);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
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

      <main className="bg-white text-gray-800 relative min-h-screen">
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
                Online Re-Certification
              </h1>
              <p className="text-sm md:text-base">
                Designed for well-experienced forklift operators. Access online certification from anywhere, anytime.
              </p>
            </div>
          </div>
        </div>

        {/* New Section Under Hero */}
        <section className="max-w-3xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#d04a00] mb-4">
            Stay OSHA-Compliant with Online Re-Certification
          </h2>
          <p className="text-md text-gray-700 mb-6">
            OSHA reg-(29-CFR 1910.178) Forklift Operator Re-Certification is required every 3 years. 
            This online course provides fast, affordable access to meet compliance from the comfort of your home or facility.
            <br /><br />
            * Available in Spanish upon request  
            <br />
            * For Corporate Training or Trainers Only
          </p>
        </section>

        {/* Pricing / CTA Section */}
        <section className="max-w-4xl mx-auto px-4 text-center pb-24">
          <div className="bg-white p-8 rounded-xl shadow-md border border-orange-100 max-w-md mx-auto mb-8">
            <p className="text-xl font-semibold text-gray-800 mb-2">Online Re-Certification</p>
            <p className="text-4xl font-bold text-[#d04a00] mb-4">$49.50</p>
            <p className="text-sm text-gray-600 mb-6">
              Please sign up or log in to access the course.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/sign-up"
                className="bg-[#d04a00] hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-lg transition"
              >
                Sign Up
              </Link>
              <button
                onClick={() => setShowLoginPopup(true)}
                className="bg-white border border-[#d04a00] text-[#d04a00] hover:bg-orange-50 font-semibold py-2 px-6 rounded-lg transition"
              >
                Log In
              </button>
            </div>
          </div>

          {/* Corporate Trainer Note */}
          <p className="text-sm text-gray-700 max-w-md mx-auto mb-2">
            For Corporate “Train the Trainer” certification, please contact us directly.
          </p>
          <p className="text-sm text-gray-700">
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
        </section>

        {/* Login Popup Modal */}
        {showLoginPopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm text-center">
              <h2 className="text-xl font-bold text-[#d04a00] mb-4">Login Unavailable</h2>
              <p className="text-sm text-gray-700 mb-6">
                Login access is currently not available. Please check back soon or sign up instead.
              </p>
              <button
                onClick={() => setShowLoginPopup(false)}
                className="bg-[#d04a00] hover:bg-orange-700 text-white font-semibold py-2 px-5 rounded transition"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
