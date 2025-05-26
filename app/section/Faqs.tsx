'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Do I need prior experience to get certified?',
    answer:
      'No experience is necessary. Our training is designed for both beginners and experienced operators. We cover everything from OSHA rules to hands-on operation.',
  },
  {
    question: 'How long is my forklift certification valid?',
    answer:
      'Forklift certification is valid for 3 years in accordance with OSHA Regulation 29 CFR 1910.178. We offer online re-certification when it’s time to renew.',
  },
  {
    question: 'Is online re-certification accepted?',
    answer:
      'Yes. Our online re-certification is designed for previously certified operators and is OSHA-compliant for corporate teams or individual workers.',
  },
  {
    question: 'Do you offer group or corporate training packages?',
    answer:
      'Absolutely. We provide on-site and remote training options for corporate groups. Volume discounts and scheduling flexibility are available.',
  },
  {
    question: 'Do you provide documentation after completion?',
    answer:
      'Yes. You’ll receive a Certificate of Completion and a wallet card valid for 3 years upon passing the evaluation.',
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24 px-6" id="faq">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center font-extrabold text-[#d04a00] mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-orange-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex items-center justify-between text-left px-6 py-4 bg-[#fff7f2] text-[#9a2e00] font-semibold text-lg focus:outline-none"
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-700 text-base bg-white">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
