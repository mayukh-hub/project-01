
import { ArrowRight } from "lucide-react";

function About() {
  return (
    
    <section id="about" className="bg-white px-4 py-10 md:px-10 md:py-14">

      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-14">

        {/* Left Content */}
        <div className="order-2 md:order-1">

          <span className="text-xs font-bold tracking-[3px] text-green-700">
            ABOUT US
          </span>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-green-950 sm:text-4xl">
            Your Partner
            <br />
            in Progress
          </h2>

          <p className="mt-4 max-w-md text-sm leading-7 text-gray-600">
            We're committed to helping you achieve your goals
            with innovative solutions and dedicated support.
            Together, we create a brighter and more sustainable
            future.
          </p>

          <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-green-800 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-green-700">

            Learn More
            <ArrowRight size={16} />

          </button>

        </div>

        {/* Right Image */}
        <div className="relative z-10 h-52 w-full rounded-xl object-cover shadow-md transition-transform duration-500 ease-out group-hover:scale-[1.03] md:h-72">

          {/* Decorative Background */}
          <div className="absolute -right-2 -top-2 h-20 w-20 rounded-full bg-lime-200"></div>

          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
            alt="Modern office building"
            className="relative z-10 h-52 w-full rounded-xl object-cover shadow-md md:h-72"
          />

        </div>

      </div>

    </section>
  );
}

export default About;

