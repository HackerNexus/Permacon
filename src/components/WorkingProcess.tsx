"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  PencilRuler,
  HardHat,
  KeyRound,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Site visit, budget discussion, and project goals to understand your vision and requirements.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Design",
    description:
      "Preparation of architectural plans, permits, and material selections tailored to your project.",
    icon: PencilRuler,
  },
  {
    number: "03",
    title: "Construction",
    description:
      "Professional construction with weekly progress updates and milestone walkthroughs to keep you informed.",
    icon: HardHat,
  },
  {
    number: "04",
    title: "Handover",
    description:
      "Final inspection, project handover, and warranty orientation to ensure complete satisfaction.",
    icon: KeyRound,
  },
];

export default function WorkingProcess() {
  return (
    <section
      id="process"
      className="py-24 bg-[#0b1220] text-white"
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
            Our Process
          </span><br/>

          <h2 className="text-blue-400 uppercase tracking-[0.3em] text-sm font-semibold">
            How We Bring Your Vision to Life
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">
            From the initial consultation to the final handover, we follow a
            proven process that ensures quality workmanship, clear
            communication, and timely project delivery.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
  {steps.map((step, index) => {
    const Icon = step.icon;

    return (
      <div key={step.number} className="relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.15,
          }}
          viewport={{ once: true }}
          className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-300"
        >
          <div className="absolute top-6 right-6 text-5xl font-extrabold text-white/10">
            {step.number}
          </div>

          <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-6">
            <Icon className="w-8 h-8 text-blue-400" />
          </div>

          <h3 className="text-2xl font-semibold mb-4">
            {step.title}
          </h3>

          <p className="text-gray-400 leading-7">
            {step.description}
          </p>
        </motion.div>

        {/* Workflow Arrow */}
        {index < steps.length - 1 && (
          <div className="hidden lg:flex absolute top-1/2 -right-8 -translate-y-1/2 z-20">
            <ArrowRight className="w-8 h-8 text-blue-500 animate-pulse" />
          </div>
        )}
      </div>
    );
  })}
</div>
      </div>
    </section>
  );
}