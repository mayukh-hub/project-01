
import { Users, Trophy, Award } from "lucide-react";

function Stats() {

  const stats = [
    {
      icon: Users,
      number: "10K+",
      title: "Happy Clients",
    },
    {
      icon: Trophy,
      number: "500+",
      title: "Projects Delivered",
    },
    {
      icon: Award,
      number: "98%",
      title: "Success Rate",
    },
  ];

  return (
    <section className="bg-white px-6 py-5 md:px-10">

      <div className="grid grid-cols-1 gap-3 rounded-xl bg-lime-100 p-5 sm:grid-cols-3">

        {stats.map((stat, index) => {

          const Icon = stat.icon;

          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center py-3 text-center"
            >

              <Icon
                size={27}
                className="mb-2 text-green-800"
              />

              <h3 className="text-xl font-bold text-green-950">
                {stat.number}
              </h3>

              <p className="mt-1 text-xs font-medium text-gray-700">
                {stat.title}
              </p>

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default Stats;
