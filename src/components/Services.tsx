"use client";

import { motion } from "framer-motion";
import {
  House,
  Building2,
  Hammer,
  Paintbrush,
} from "lucide-react";

const services = [
  {
    icon: House,
    title: "Custom Home Design",
    description:
      "Architectural planning and design-build packages tailored to your lot and lifestyle.",
  },
  {
    icon: Building2,
    title: "New Building Construction",
    description:
      "Ground-up builds delivered on schedule, with transparent milestone pricing.",
  },
  {
    icon: Hammer,
    title: "Renovations & Additions",
    description:
      "Kitchens, primary suites, and whole-home or office remodels completed to the highest standards.",
  },
  {
    icon: Paintbrush,
    title: "Finish & Interior Build-Out",
    description:
      "Cabinetry, flooring, and trim carpentry expertly completed by our in-house crews.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-[#081221] via-[#0A2F63] to-[#123F87] text-white"
    >

      {/* Background Glow */}

      <div className="absolute -top-32 -left-24 w-96 h-96 bg-blue-500/10 blur-[160px] rounded-full" />

      <div className="absolute -bottom-32 -right-24 w-[28rem] h-[28rem] bg-cyan-400/10 blur-[180px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-blue-300 uppercase tracking-[0.35em] text-sm font-semibold">
            Building Excellence From Design to Completion
          </h2>

          <span className="block mt-5 text-4xl md:text-5xl font-bold">
            Our Services
          </span>

          <p className="mt-6 max-w-3xl mx-auto text-gray-300 leading-8">
            Permacon Enterprises provides professional construction,
            renovation and design solutions tailored to residential
            and commercial projects, delivering quality craftsmanship
            from concept to completion.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={service.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: .5,
                  delay: index * .15,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -12,
                }}
                className="group rounded-3xl border border-blue-500/20 bg-gradient-to-br from-white/5 to-blue-900/20 backdrop-blur-xl p-8 shadow-xl hover:border-blue-400 hover:shadow-blue-500/20 transition-all duration-500"
              >

               <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center mb-7 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:from-cyan-400 group-hover:to-blue-700">

  <Icon className="w-8 h-8 text-white transition-all duration-300 group-hover:text-yellow-300 group-hover:drop-shadow-[0_0_12px_rgba(253,224,71,0.9)]" />

</div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-300 transition-colors">

                  {service.title}

                </h3>

                <p className="text-gray-300 leading-8">

                  {service.description}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}