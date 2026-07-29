"use client";

import { motion } from "framer-motion";
import {
  Award,
  Users,
  ShieldCheck,
  Clock3,
  BadgeDollarSignIcon,
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Quality Workmanship",
    description:
      "Every project is completed using high-quality materials and skilled craftsmanship to ensure durability and excellence.",
  },
  {
    icon: Users,
    title: "One Point of Contact",
    description:
      "A dedicated project manager from contract to final inspection.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured Crews",
    description:
      "In-house tradespeople, not a rotating cast of subcontractors.",
  },
  {
    icon: Clock3,
    title: "Timely Delivery",
    description:
      "90% of projects completed on or ahead of the agreed schedule.",
  },
  {
    icon: BadgeDollarSignIcon,
    title: "Transparent Pricing",
    description:
      "Itemized estimates with no hidden change-order surprises.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-[#081221] via-[#0C356F] to-[#06162D] text-white"
    >

      {/* Background Glow */}

      <div className="absolute -top-40 -left-24 w-[28rem] h-[28rem] rounded-full bg-blue-500/10 blur-[170px]" />

      <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-20"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-blue-300 mb-5">

            Why Choose Permacon Enterprises?

          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-8">

            We combine professionalism, innovation and quality workmanship
            to deliver construction projects that exceed our clients'
            expectations.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">

          {reasons.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: .6,
                  delay: index * .12,
                }}
                whileHover={{
                  y: -12,
                }}
                className="group rounded-3xl border border-blue-500/20 bg-gradient-to-br from-white/5 to-blue-900/20 backdrop-blur-xl p-8 shadow-xl hover:border-blue-400 hover:shadow-blue-500/20 transition-all duration-500"
              >

                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:from-cyan-400 group-hover:to-blue-700">

                  <Icon className="h-8 w-8 text-white transition-all duration-300 group-hover:text-yellow-300 group-hover:drop-shadow-[0_0_12px_rgba(253,224,71,0.9)]" />

                </div>

                <h3 className="mb-4 text-2xl font-bold transition-colors duration-300 group-hover:text-blue-300">

                  {item.title}

                </h3>

                <p className="leading-8 text-gray-300">

                  {item.description}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}