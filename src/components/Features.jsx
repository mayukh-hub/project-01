
import {
  Sprout,
  ShieldCheck,
  Users,
  Headset
} from "lucide-react";

function Features() {

  const features = [
    { icon: Sprout, title: "Sustainable Growth" },
    { icon: ShieldCheck, title: "Trusted Services" },
    { icon: Users, title: "Expert Team" },
    { icon: Headset, title: "24/7 Support" },
  ];

  return (
    <section className="relative z-20 mx-3 -mt-8 rounded-xl bg-white px-3 py-3 shadow-lg md:mx-8 md:py-6">

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">

        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 rounded-lg px-2 py-4 text-center transition duration-300 hover:bg-green-50"
            >
        {/* {Features Icon} */}
              <Icon
                size={26}
                strokeWidth={2}
                className="shrink-0 text-green-700 sm:h-7 sm:w-7 md:h-8 md:w-8"
              />
         {/* Features Title */}

              <h3 className="text-xs font-semibold leading-snug text-gray-800 sm:text-sm md:text-base">
                {feature.title}
              </h3>

            </div>
          );
        })}

      </div>
    </section>
  );
}

export default Features;
