'use client';

import { MessageCircleHeart, Star, ThumbsUp, UserCheck } from 'lucide-react';

export const testimonials = [
  {
    text: "I got certified through B&W in less than a day. Their instructors made it simple, safe, and easy to understand. I was driving with confidence by the end of class.",
    name: "Marquis James",
    title: "Warehouse Associate @ Flex Logistics",
    icon: <UserCheck className="w-14 h-14 text-[#d04a00]" />,
  },
  {
    text: "This training was exactly what we needed for our team. Dennis explained everything clearly and gave great feedback during the hands-on evaluation.",
    name: "Latasha Green",
    title: "Operations Lead @ Fresh Supply Co.",
    icon: <ThumbsUp className="w-14 h-14 text-[#d04a00]" />,
  },
  {
    text: "I renewed my certification online in under 30 minutes. It was clear, fast, and convenient. Highly recommend for anyone who just needs a refresher.",
    name: "Carlos Rivera",
    title: "Forklift Operator",
    icon: <Star className="w-14 h-14 text-[#d04a00]" />,
  },
  {
    text: "Dennis Watson and the B&W team helped get our entire maintenance crew OSHA-certified in one afternoon. Professional and efficient.",
    name: "Jessica Tran",
    title: "Facility Manager @ Central Tech",
    icon: <MessageCircleHeart className="w-14 h-14 text-[#d04a00]" />,
  },
];

export const Likes = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 overflow-hidden bg-[#d04a00]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl text-center tracking-tight font-extrabold text-white">
          What Our Students Say
        </h2>
        <p className="text-white text-lg text-center mt-4 max-w-xl mx-auto">
          Real feedback from individuals and companies who trust B&W Forklift Training to deliver OSHA-compliant, hands-on certification.
        </p>
      </div>

      {/* Scrolling Testimonials */}
      <div className="relative mt-12 w-screen overflow-hidden group">
        <div
          className="flex gap-8 animate-scroll-left"
          style={{
            animation: 'scrollLeft 60s linear infinite',
            animationPlayState: 'running',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.animationPlayState = 'paused';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.animationPlayState = 'running';
          }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="border border-orange-200 bg-white p-6 rounded-xl min-w-[360px] max-w-[460px] flex-none shadow-md hover:shadow-xl transition text-gray-800"
            >
              <div className="text-base md:text-lg mb-4">
                {testimonial.text}
              </div>
              <div className="flex items-center gap-4 mt-4">
                {testimonial.icon}
                <div>
                  <div className="font-semibold text-base text-[#d04a00]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-left {
          display: flex;
          animation: scrollLeft 60s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
};
