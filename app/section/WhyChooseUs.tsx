export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#d04a00] mb-10">
          Why Choose B&W Forklift Training?
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-left">
          {/* Feature 1 */}
          <div className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-md transition">
            <div className="text-4xl mb-4">🕒</div>
            <h3 className="text-xl font-semibold mb-2">Same-Day Certification</h3>
            <p className="text-sm text-gray-700">
              Walk out with your official forklift card on the same day as training.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-md transition">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold mb-2">OSHA-Compliant Training</h3>
            <p className="text-sm text-gray-700">
              Fully aligned with OSHA reg (29-CFR 1910.178) for safety and legal certification.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-md transition">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-xl font-semibold mb-2">Online & In-Person</h3>
            <p className="text-sm text-gray-700">
              Flexible scheduling with classroom, remote, and corporate group options.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-md transition">
            <div className="text-4xl mb-4">🧑🏽‍🏫</div>
            <h3 className="text-xl font-semibold mb-2">Small Class Sizes</h3>
            <p className="text-sm text-gray-700">
              We keep our groups small so every student gets hands-on experience and guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
