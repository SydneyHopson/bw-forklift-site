'use client';
import React, { useEffect, useState } from 'react';

const videoSources = [
  '/videos/hero-1.mp4',
  '/videos/hero-2.mp4',
  '/videos/hero-4.mp4',
  '/videos/hero-3.mp4',
  '/videos/hero-5.mp4',
];

export default function Hero() {
  const [videoIndex, setVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVideoIndex((prev) => (prev + 1) % videoSources.length);
    }, 6000); // change every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden text-white">
      {/* Background Video */}
      <video
        key={videoIndex}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={videoSources[videoIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Orange Content Box */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center max-w-3xl mx-auto">
        <div className="bg-[#d04a00]/90 backdrop-blur-sm px-6 py-8 rounded-lg shadow-lg space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Welcome to B&W Forklift Training Center LLC.
          </h1>

          <div className="text-lg md:text-xl font-medium text-white space-y-1">
            <p>Classroom Training</p>
            <p>Online Training and Re-Certification</p>
            <p className="text-yellow-300 text-xl font-semibold uppercase tracking-wide">
              For Corporate Training Only
            </p>
            <p>Online Forklift Certification</p>
            <p>Scissor Lift and Boom Lift Training</p>
          </div>

          <p className="mt-4 text-base md:text-lg text-white/90 italic">
            OSHA reg-(29-CFR 1910.178) <br />
            Forklift Operator Training & Certification.
          </p>
        </div>
      </div>
    </section>
  );
}
