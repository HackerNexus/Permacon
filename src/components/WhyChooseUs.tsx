"use client";

import { motion } from "framer-motion";
import {
  Award,
  Users,
  ShieldCheck,
  Clock3,
  BadgeDollarSignIcon,
  ClipboardCheck,
  PenTool,
  Hammer,
  Home,
  ArrowRight,
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
      "Itemized estimates with no hidden changeorder surprises.",
  },
];

const process = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Consultation",
    description:
      "We meet with you to understand your vision, requirements, budget and project expectations.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Planning & Design",
    description:
      "Our experts prepare designs, project plans, schedules and cost estimates before construction begins.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Construction",
    description:
      "Our experienced team executes the project professionally while maintaining quality and safety standards.",
  },
  {
    number: "04",
    icon: Home,
    title: "Project Handover",
    description:
      "After quality inspection, the completed project is delivered to the client with complete satisfaction.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-24 bg-[#050816] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
            Why Choose Permacon Enterprises?
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            We combine professionalism, innovation and quality workmanship
            to deliver construction projects that exceed our clients'
            expectations.
          </p>
        </motion.div>

        {/* ================= REASONS ================= */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-28">

          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .6,
                  delay: index * .15,
                }}
                whileHover={{
                  y: -10,
                }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-blue-500 transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center mb-6">

                  <Icon className="w-8 h-8 text-blue-400" />

                </div>

                <h3 className="text-2xl font-bold mb-4">

                  {item.title}

                </h3>

                <p className="text-gray-400 leading-8">

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