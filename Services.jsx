
import { ArrowRight } from "lucide-react";

function Services() {

  const services = [
    {
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
      title: "Consulting",
      description: "Expert advice for greater impact.",
    },
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      title: "Technology",
      description: "Build smarter with modern technology.",
    },
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      title: "Business Growth",
      description: "Strategic solutions for long-term success.",
    },
  ];

  return (
    <section className="bg-white px-6 py-10 md:px-10">

      {/* Section Heading */}
      <div className="mb-7 text-center">

        <h2 className="text-2xl font-bold text-green-950 md:text-3xl">
          Our Services
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          Tailored solutions to meet your needs
        </p>

      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">

        {services.map((service, index) => (

          <div
            key={index}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >

            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="h-44 w-full object-cover"
            />

            {/* Content */}
            <div className="p-4">

              <h3 className="text-lg font-bold text-green-950">
                {service.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                {service.description}
              </p>

              <button className="mt-4 flex items-center gap-2 text-sm font-semibold text-green-800 hover:text-lime-600">

                Learn More
                <ArrowRight size={16} />

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Services;
