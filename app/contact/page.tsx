'use client';


import Footer from '../section/Footer';
import { Mail, MapPin, Phone } from 'lucide-react';
import Header from '../section/Headers';

export default function ContactSection() {
  return (
    <>
      <Header />

      <section className="bg-[#f9f9f9] py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#d04a00] mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-700 text-md md:text-lg mb-12">
            Have questions about certification, scheduling, or group training? Reach out to us directly.
          </p>

          <div className="grid gap-10 md:grid-cols-3 text-left">
            <div className="flex flex-col items-center text-center">
              <MapPin className="w-8 h-8 text-[#d04a00] mb-2" />
              <h3 className="font-semibold mb-1 text-gray-800">Location</h3>
              <p className="text-sm text-gray-600">Stone Mountain, GA</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Phone className="w-8 h-8 text-[#d04a00] mb-2" />
              <h3 className="font-semibold mb-1 text-gray-800">Phone</h3>
              <p className="text-sm text-gray-600">(770) 294-1987</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Mail className="w-8 h-8 text-[#d04a00] mb-2" />
              <h3 className="font-semibold mb-1 text-gray-800">Email</h3>
              <p className="text-sm text-gray-600">bwforklifttrainingcenter@gmail.com</p>
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSck55r5RqtcgjJWio1_q_FxISVyQqmBT9ARJIS4_i6VimmucQ/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full rounded-xl shadow-md"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
