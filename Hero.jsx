
import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="relative flex min-h-85 items-center overflow-hidden px-6 py-12 md:min-h-95 md:px-10">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b"
        alt="Growing green plant"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-green-950 via-green-950/85 to-green-950/20"></div>
 {/* Hero Content */}
      <div className="relative z-10 w-full max-w-lg text-white">

        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Innovate. Grow.
          <span className="block text-lime-400">
            Succeed.
          </span>
        </h1>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-100 sm:text-base md:text-lg">
          Smart solutions for a brighter
          and more successful future.
        </p>
        
       <button className="mt-6 flex items-center gap-2 rounded-full bg-lime-400 px-5 py-3 text-sm font-semibold text-green-950 transition duration-300 hover:bg-lime-300 sm:px-7 sm:py-3.5">
          Explore More
          <ArrowRight size={18} />
        </button>

      </div>
    </section>
  );
}

export default Hero;
