"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What construction services do you offer?",
    answer:
      "Permacon Enterprises provides residential and commercial construction, renovations, building maintenance, project management, civil works and general contracting services tailored to each client's requirements.",
  },
  {
    question: "Do you provide free site visits and quotations?",
    answer:
      "Yes. We conduct site visits to understand your project requirements before providing a detailed quotation at no cost within our service areas.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We undertake projects across Kenya. Depending on the scope of work, we are available for both urban and rural construction projects.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project duration depends on the size and complexity of the work. Residential projects may take a few weeks while larger commercial developments can take several months.",
  },
  {
    question: "Do you handle both labour and materials?",
    answer:
      "Yes. Clients may choose labour-only contracts or complete turnkey construction services where we supply labour, materials, equipment and project supervision.",
  },
  {
    question: "Are your projects insured and safe?",
    answer:
      "Absolutely. Safety is one of our core values. We follow industry safety standards and ensure all personnel use proper protective equipment throughout every project.",
  },
  {
    question: "Can I request custom house designs?",
    answer:
      "Yes. We work closely with architects and engineers to deliver customized designs that suit your budget, land size and lifestyle.",
  },
  {
    question: "How do I begin working with Permacon Enterprises?",
    answer:
      "Simply contact us through the booking form, WhatsApp, phone call or email. Our team will arrange a consultation and guide you through every stage of your project.",
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="relative overflow-hidden py-24 bg-gradient-to-b from-[#06172E] via-[#0A2348] to-[#081221] text-white"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative max-w-5xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 font-semibold tracking-widest uppercase text-sm mb-6">
            Frequently Asked Questions
          </span>

          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Everything You Need
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              To Know
            </span>
          </h2>

          <p className="text-gray-300 text-lg leading-8 max-w-3xl mx-auto">
            Find quick answers about our services, project process,
            timelines, pricing, consultations and everything you need
            before working with Permacon Enterprises.
          </p>

        </motion.div>

        {/* FAQ Items */}

        <div className="space-y-6">
                    {faqs.map((faq, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                scale: 1.01,
              }}
              className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(0,170,255,.20)]"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-8 py-7 text-left"
              >

                <div className="flex items-center gap-5">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 font-bold text-white shadow-lg">

                    {String(index + 1).padStart(2, "0")}

                  </div>

                  <span className="text-lg md:text-xl font-semibold">

                    {faq.question}

                  </span>

                </div>

                <motion.div
                  animate={{
                    rotate: activeIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="rounded-full bg-cyan-500/10 p-2"
                >

                  <ChevronDown className="h-6 w-6 text-cyan-300" />

                </motion.div>

              </button>

              <AnimatePresence>

                {activeIndex === index && (

                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="overflow-hidden"
                  >

                    <div className="border-t border-cyan-500/10 px-8 pb-8 pt-6">

                      <p className="leading-8 text-gray-300">

                        {faq.answer}

                      </p>

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>
                {/* Bottom Call To Action */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-20 overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-[#082344] via-[#0A3B73] to-[#0D5EA8] p-12 text-center shadow-[0_0_60px_rgba(0,140,255,.18)]"
        >

          {/* Glow */}

          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-cyan-400/20 blur-[90px]" />

          <div className="relative z-10">

            <h3 className="text-4xl font-bold mb-5">
              Still Have Questions?
            </h3>

            <p className="max-w-2xl mx-auto text-lg leading-8 text-blue-100 mb-10">
              Our construction experts are always available to discuss
              your project, provide professional advice and help you
              make the best decisions before construction begins.
            </p>

            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 35px rgba(0,190,255,.45)",
              }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-3 rounded-xl bg-white px-10 py-4 font-bold text-blue-700 transition-all duration-300 hover:bg-cyan-50"
            >
              Contact Our Team
            </motion.a>

          </div>

        </motion.div>

      </div>

    </section>

  );

}