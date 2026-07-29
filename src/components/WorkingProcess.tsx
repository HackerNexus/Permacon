"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  PencilRuler,
  HardHat,
  KeyRound,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Site visit, budget discussion and project planning to fully understand your vision, requirements and expectations before work begins.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Design",
    description:
      "Preparation of architectural drawings, engineering plans, permits and material selections tailored specifically to your project.",
    icon: PencilRuler,
  },
  {
    number: "03",
    title: "Construction",
    description:
      "Professional construction executed with strict quality control, safety standards and regular progress updates throughout the project.",
    icon: HardHat,
  },
  {
    number: "04",
    title: "Handover",
    description:
      "Final inspection, quality assurance, project delivery and post-construction support to guarantee complete client satisfaction.",
    icon: KeyRound,
  },
];

export default function WorkingProcess() {
  return (
    <section
      id="process"
      className="relative overflow-hidden py-28 bg-gradient-to-b from-[#06172E] via-[#081B36] to-[#050816] text-white"
    >

      {/* Background Glow */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-blue-700/10 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-20"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-6 py-2 mb-7">

            <Sparkles className="w-4 h-4 text-cyan-300" />

            <span className="uppercase tracking-[0.3em] text-xs font-semibold text-cyan-300">
              Our Workflow
            </span>

          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">

            How We Bring Your
            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              Vision To Life
            </span>

          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-gray-300 leading-8 text-lg">
            Every successful project follows a proven process. From your
            first consultation to the final handover, we deliver quality,
            transparency and professionalism at every stage.
          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Horizontal Line */}

          <div className="hidden lg:block absolute top-24 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-cyan-500/20 via-blue-500/50 to-cyan-500/20" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (

                <div
                  key={step.number}
                  className="relative"
                >

                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: .5,
                      delay: index * .15,
                    }}
                    whileHover={{
                      y: -12,
                    }}
                    className="relative rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8 shadow-xl transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(0,170,255,.20)]"
                  >

                    <div className="absolute top-5 right-6 text-6xl font-extrabold text-white/5">
                      {step.number}
                    </div>

                    <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700 shadow-xl mb-8">

                      <Icon className="w-10 h-10 text-white" />

                    </div>

                    <h3 className="text-2xl font-bold mb-5">

                      {step.title}

                    </h3>

                    <p className="leading-8 text-gray-300">

                      {step.description}

                    </p>
                                        {/* Step Number Circle */}

                    <div className="hidden lg:flex absolute -top-8 left-1/2 -translate-x-1/2 h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 text-sm font-bold shadow-lg border-4 border-[#081B36]">

                      {step.number}

                    </div>

                  </motion.div>

                  {/* Animated Arrow */}

                  {index < steps.length - 1 && (

                    <motion.div
                      animate={{
                        x: [0, 8, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.8,
                      }}
                      className="hidden lg:flex absolute top-24 -right-7 z-20"
                    >

                      <ArrowRight className="w-8 h-8 text-cyan-400" />

                    </motion.div>

                  )}

                </div>

              );

            })}

          </div>

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="relative overflow-hidden mt-24 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-[#082344] via-[#0A3B73] to-[#0D5EA8] p-12 text-center shadow-[0_0_60px_rgba(0,140,255,.18)]"
        >

          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-cyan-400/20 blur-[90px]" />

          <div className="relative z-10">

            <h3 className="text-4xl font-bold mb-6">

              Ready To Build With Confidence?

            </h3>

            <p className="max-w-3xl mx-auto text-lg leading-8 text-blue-100 mb-10">

              Our proven construction process ensures every project is
              delivered with quality workmanship, transparency,
              professionalism and attention to every detail from start
              to finish.

            </p>

            <motion.a
              href="#booking"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 35px rgba(0,190,255,.45)",
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="inline-flex items-center gap-3 rounded-xl bg-white px-10 py-4 font-bold text-blue-700 transition-all duration-300 hover:bg-cyan-50"
            >

              Book A Consultation

              <ArrowRight className="w-5 h-5" />

            </motion.a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}