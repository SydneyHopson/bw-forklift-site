'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">B&W Forklift Training Center</h3>
          <p className="flex justify-center md:justify-start items-center gap-2 mb-2 text-sm text-gray-300">
            <MapPin className="w-4 h-4" /> Stone Mountain, GA
          </p>
          <p className="flex justify-center md:justify-start items-center gap-2 mb-2 text-sm text-gray-300">
            <Phone className="w-4 h-4" /> (770) 294-1987
          </p>
          <p className="flex justify-center md:justify-start items-center gap-2 text-sm text-gray-300">
            <Mail className="w-4 h-4" /> bwforklifttrainingcenter@gmail.com
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/" className="hover:text-[#d04a00] transition">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#d04a00] transition">About</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#d04a00] transition">Services</Link>
            </li>
            <li>
              <Link href="/re-certify" className="hover:text-[#d04a00] transition">Re-Certify</Link>
            </li>
            <li>
              <Link href="/sign-up" className="hover:text-[#d04a00] transition">Book Training</Link>
            </li>
          </ul>
        </div>

        {/* Message */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Committed to Safety</h3>
          <p className="text-sm text-gray-300">
            We are dedicated to providing OSHA-compliant forklift certification and re-certification. Proudly serving Georgia and surrounding areas with hands-on training built for real-world success.
          </p>
        </div>
      </div>

      {/* Payment & Trust Badges */}
      <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8">
        <Image
          src="/images/footer/vosb.png"
          alt="Veteran Owned Small Business"
          className="w-28 h-auto"
          width={112}
          height={112}
        />
        <Image
          src="/images/footer/acceptedpayments.png"
          alt="Accepted Payment Methods"
          className="w-70 h-auto"
          width={120}
          height={64}
        />
        <Image
          src="/images/footer/paypal.png"
          alt="PayPal Verified"
          className="w-28 h-auto"
          width={112}
          height={112}
        />
      </div>

      <div className="text-center text-xs text-gray-800 mt-12">
        &copy; {new Date().getFullYear()} B&W Forklift Training Center LLC. All rights reserved.
      </div>
    </footer>
  );
}
