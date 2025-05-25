'use client';
import Image from 'next/image';

export default function VeteranSupportBanner() {
  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-xl md:text-2xl font-bold text-[#d04a00] mb-6">
          Proudly Supporting All U.S. Armed Forces Veterans
        </h3>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto text-sm md:text-base">
          We honor and support all who served. All military veterans receive exclusive discounts on OSHA-certified forklift, boom lift, and scissor lift training programs.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6">
          <Image
            src="/images/armedforces/afsmall85.jpg"
            alt="U.S. Air Force"
            width={85}
            height={85}
            className="h-14 w-auto"
          />
          <Image
            src="/images/armedforces/armysmall85.jpg"
            alt="U.S. Army"
            width={85}
            height={85}
            className="h-14 w-auto"
          />
          <Image
            src="/images/armedforces/cgsmall85.jpg"
            alt="U.S. Coast Guard"
            width={85}
            height={85}
            className="h-14 w-auto"
          />
          <Image
            src="/images/armedforces/navysmall85.jpg"
            alt="U.S. Navy"
            width={85}
            height={85}
            className="h-14 w-auto"
          />
          <Image
            src="/images/armedforces/usmcsmall85.jpg"
            alt="U.S. Marine Corps"
            width={85}
            height={85}
            className="h-14 w-auto"
          />
        </div>
      </div>
    </section>
  );
}
