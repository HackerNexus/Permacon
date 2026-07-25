import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Handshake,
  Lightbulb,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We conduct every project with honesty, transparency and accountability.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "We deliver durable construction solutions using skilled workmanship and premium materials.",
  },
  {
    icon: Handshake,
    title: "Customer Commitment",
    description:
      "Our clients remain at the heart of every decision from consultation to project completion.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace modern construction technologies and creative engineering solutions.",
  },
];

export default function Values() {
  return (
    <section
      id="values"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-500">
            Our Core Values
          </h2>

          <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
            Every project undertaken by Permacon Enterprises is guided by
            principles that define who we are and how we serve our clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .15,
                }}
                whileHover={{
                  y: -8,
                }}
                className="bg-[#0b1120] border border-white/10 rounded-2xl p-8 text-center hover:border-blue-500 transition-all"
              >
                <div className="inline-flex p-4 rounded-xl bg-blue-600/10 mb-6">
                  <Icon className="w-10 h-10 text-blue-500" />
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {value.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}