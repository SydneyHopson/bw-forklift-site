'use client';

import Header from '../section/Headers';
import Footer from '../section/Footer';
import Link from 'next/link';
import { Award, ShieldCheck, Truck, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | B&W Forklift Training Center',
  description:
    'Learn about B&W Forklift Training Center — 25+ years of OSHA-compliant training experience, hands-on instruction, and career-ready certification.',
};

export default function AboutPage() {
  const videos = [
    '/videos/about-hero-1.mp4',
    '/videos/about-hero-2.mp4',
    '/videos/about-hero-3.mp4',
  ];
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const handleEnded = () => setIndex((prev) => (prev + 1) % videos.length);
    const video = videoRef.current;
    if (video instanceof HTMLVideoElement) {
      video.addEventListener('ended', handleEnded);
      return () => video.removeEventListener('ended', handleEnded);
    }
  }, [index, videos.length]);

  return (
    <>
      <Header />
      <main className="bg-white text-gray-800">
        {/* Hero Video */}
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

          <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
            <div className="bg-[#d04a00]/80 text-white rounded-xl px-6 py-5 text-center max-w-2xl backdrop-blur-sm shadow-lg">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
                About Us
              </h1>
              <p className="text-base md:text-lg">
                Over 25 years of forklift and safety training experience, empowering workers and companies to stay OSHA-compliant and confident on the job.
              </p>
            </div>
          </div>
        </div>

        {/* About Text Section */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#d04a00] mb-8">
              Our Mission & Values
            </h2>

            <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-6">
              We are trained forklift and safety professionals with over 25 years of experience in Powered Industrial Trucks. Our instructors come from diverse manufacturing and warehouse backgrounds, offering practical knowledge and classroom expertise.
            </p>
            <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-6">
              Our mission is to deliver OSHA-compliant certification and re-certification training to corporations and employees. We combine engaging classroom instruction with real-world, hands-on driving evaluations conducted in a safe warehouse environment.
            </p>
            <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-6">
              All training is taught to the latest safety standards in accordance with OSHA Regulation 29 CFR 1910.178. We proudly support workplace readiness, career growth, and safer job sites.
            </p>
            <p className="text-md md:text-lg text-gray-700 font-semibold mt-8">
              🇺🇸 We proudly offer discounts to all U.S. Veterans.
            </p>
          </div>
        </section>

        {/* Value Cards */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Award className="text-[#d04a00] w-8 h-8 mb-3" />,
              title: '25+ Years Experience',
              desc: 'Trusted by companies and workers across the industry for hands-on safety training.',
            },
            {
              icon: <ShieldCheck className="text-[#d04a00] w-8 h-8 mb-3" />,
              title: 'OSHA Certified',
              desc: 'We meet or exceed OSHA standards for forklift operator certification and safety compliance.',
            },
            {
              icon: <Truck className="text-[#d04a00] w-8 h-8 mb-3" />,
              title: 'Real Equipment Training',
              desc: 'Get trained in actual warehouse environments using electric pallet jacks, order pickers, and lifts.',
            },
            {
              icon: <Users className="text-[#d04a00] w-8 h-8 mb-3" />,
              title: 'Veteran Support',
              desc: 'Special discounts and placement support for veterans seeking certification.',
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md border border-orange-100 p-6 text-center transform transition duration-300 hover:shadow-xl hover:scale-105 hover:border-[#d04a00]/60"
            >
              {card.icon}
              <h4 className="text-lg font-bold text-[#d04a00] mb-2">{card.title}</h4>
              <p className="text-sm text-gray-700 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </section>

        {/* Call to Action */}
        <section className="text-center py-20 bg-[#fff7f2]">
          <h2 className="text-2xl md:text-3xl font-bold text-[#d04a00] mb-4">
            Ready to Get Certified?
          </h2>
          <p className="text-gray-700 mb-6">
            Sign up today and take the next step in safety and compliance.
          </p>
          <Link
            href="/sign-up"
            className="inline-block bg-[#d04a00] hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Book Your Forklift Training Now
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
