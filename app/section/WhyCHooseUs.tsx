'use client';

const features = [
  {
    icon: '🕒',
    title: 'Same-Day Certification',
    description:
      'Complete your training and walk out with your official forklift operator card the very same day. No delays. No downtime.',
  },
  {
    icon: '🎓',
    title: 'OSHA-Compliant Training',
    description:
      'All our programs are fully aligned with OSHA reg (29-CFR 1910.178) to ensure legal, safe, and certified forklift operation.',
  },
  {
    icon: '💻',
    title: 'Online & In-Person Options',
    description:
      'We offer flexible scheduling with both remote and classroom-based training, tailored to your corporate needs.',
  },
  {
    icon: '🧑🏽‍🏫',
    title: 'Small Class Sizes',
    description:
      'We cap our class sizes to ensure personalized, focused instruction for every student — maximizing skill retention.',
  },
  {
    icon: '🏆',
    title: '25+ Years Experience',
    description:
      'Our certified instructors have decades of real-world warehouse and forklift training experience in industrial environments.',
  },
  {
    icon: '🎖️',
    title: 'Veteran Discounts',
    description:
      'We proudly support those who served by offering special pricing and priority access to all veterans enrolling in our programs.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#d04a00] mb-12">
          Why Choose B&W Forklift Training?
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 hover:border-[#d04a00] rounded-xl p-6 shadow-sm hover:shadow-lg group transition-all duration-300"
            >
              <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#d04a00] transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors mt-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
