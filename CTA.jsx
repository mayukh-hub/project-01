
import { ArrowRight } from "lucide-react";

function CTA() {
  return (
    <section className="bg-green-950 px-6 py-8 md:px-10">

      <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">

        {/* Left Content */}
        <div className="text-center text-white sm:text-left">

          <h2 className="text-2xl font-bold">
            Let's Grow Together
          </h2>

          <p className="mt-2 text-sm text-gray-300">
            Get in touch and start your journey.
          </p>

        </div>

        {/* Right Button */}
        <button className="flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-green-950 transition hover:bg-lime-300">

          Contact Us
          <ArrowRight size={16} />

        </button>

      </div>

    </section>
  );
}

export default CTA;
