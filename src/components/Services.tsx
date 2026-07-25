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
      className="py-24 bg-[#08101f] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="mt-4 text-4xl md:text-5xl font-bold">
            Our Services
          </span>

          <h2 className="text-blue-400 uppercase tracking-[0.3em] text-sm font-semibold">
            Building Excellence From Design to Completion
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">
            Permacon Enterprises provides professional construction,
            renovation, and design solutions tailored to residential and
            commercial projects, delivering quality craftsmanship from concept
            to completion.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Icon className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-7">
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