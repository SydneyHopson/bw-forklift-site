'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo with slide-in motion */}
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <Image
              src="/images/bwlogo.png"
              alt="B&W Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </motion.div>
          <span className="text-2xl font-bold tracking-wide text-[#d04a00]">
            B&W Forklift Training
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-[#191308]">
          <Link href="/services" className="hover:text-[#d04a00] transition-colors">Services</Link>
          <Link href="/about" className="hover:text-[#d04a00] transition-colors">About</Link>
          <Link href="/re-certify" className="hover:text-[#d04a00] transition-colors">Re-Certify</Link>
          <Link href="/sign-up" className="hover:text-[#d04a00] transition-colors">Book Training</Link>
          <Link href="/contact" className="hover:text-[#d04a00] transition-colors">Contact</Link>
          <Link
            href="/sign-up"
            className="bg-[#d04a00] hover:bg-orange-700 text-white py-2 px-4 rounded-lg font-semibold shadow transition-colors"
          >
            Register
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#d04a00] focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner px-4 py-4 space-y-4 text-sm font-medium text-[#191308]">
          <Link href="/services" className="block hover:text-[#d04a00]">Services</Link>
          <Link href="/about" className="block hover:text-[#d04a00]">About</Link>
          <Link href="/re-certify" className="block hover:text-[#d04a00]">Re-Certify</Link>
          <Link href="/sign-up" className="block hover:text-[#d04a00]">Book Training</Link>
          <Link href="/contact" className="block hover:text-[#d04a00]">Contact</Link>
          <Link
            href="/sign-up"
            className="block bg-[#d04a00] hover:bg-orange-700 text-white py-2 px-4 rounded-lg font-semibold text-center transition"
          >
            Register
          </Link>
        </div>
      )}
    </header>
  );
}
