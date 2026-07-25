"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What construction services do you offer?",
    answer:
      "Permacon Enterprises provides residential and commercial construction, renovations, building maintenance, project management, civil works, and general contracting services tailored to client requirements.",
  },
  {
    question: "Do you provide free site visits and quotations?",
    answer:
      "Yes. We conduct site visits to understand your project requirements and provide a detailed quotation at no cost within our service areas.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We undertake projects across Kenya. Depending on the scope of work, we are available for both urban and rural construction projects.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project duration depends on size and complexity. Small residential projects may take a few weeks while larger commercial developments can take several months. A timeline is provided before commencement.",
  },
  {
    question: "Do you handle both labour and materials?",
    answer:
      "Yes. Clients may choose labour-only contracts or complete turnkey construction services where we supply labour, materials, equipment and project supervision.",
  },
  {
    question: "Are your projects insured and safe?",
    answer:
      "Absolutely. Safety is one of our core values. We follow industry safety standards and ensure our personnel use proper protective equipment while maintaining safe working environments.",
  },
  {
    question: "Can I request custom house designs?",
    answer:
      "Yes. We work closely with architects and engineers to deliver customized designs that suit your budget, land size and lifestyle requirements.",
  },
  {
    question: "How do I begin working with Permacon Enterprises?",
    answer:
      "Simply contact us through the booking form, WhatsApp, phone call or email. Our team will arrange a consultation and guide you through every stage of the project.",
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section
      id="faqs"
      className="py-24 bg-[#081221] text-white"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-5">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Find answers to some of the most common questions about
            our construction services.
          </p>
        </motion.div>

        {/* FAQ Items */}

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                <motion.div
                  animate={{
                    rotate:
                      activeIndex === index
                        ? 180
                        : 0,
                  }}
                >
                  <ChevronDown className="w-6 h-6 text-blue-400" />
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
                      duration: 0.3,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-white/10">
                      <p className="text-gray-400 leading-8 pt-5">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </motion.div>
          ))}

        </div>

        {/* Bottom Call to Action */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-lg mb-6">
            Still have questions?
          </p>

          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold"
          >
            Contact Our Team
          </a>
        </motion.div>

      </div>
    </section>
  );
}