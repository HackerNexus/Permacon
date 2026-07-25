"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Award,
  Home,
  Users,
} from "lucide-react";

const achievements = [
  {
    icon: Building2,
    value: "2+",
    title: "Years in Business",
  },
  {
    icon: Home,
    value: "10+",
    title: "Homes Completed",
  },
  {
    icon: Users,
    value: "98%",
    title: "Client Satisfaction",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-[#081221] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
            About Permacon Enterprises
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            ❑ PERMACON ENTERPRISES is a building company serving the 
                Kenyan region for over two years. We specialize in residential 
                and commercial constructions, whole-home renovations,
                guided by a simple belief: a home should be built as 
                carefully as it will be lived in and civil works.
          </p>
          <br/>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
               ❑ Our licensed crews and in-house design team manages every
                 project from first sketch to final walkthrough, so clients work 
                 with one accountable partner rather than a chain of subcontractors.
            </p>
        </motion.div>

        {/* ABOUT CONTENT */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-5 py-2 text-blue-300 text-sm mb-6">
              <Award className="w-4 h-4" />
              Professional Construction Company
            </div>

            <h3 className="text-4xl font-bold mb-8 leading-tight">
              Building Strong Foundations
              <span className="block text-blue-400">
                For Homes & Businesses
              </span>
            </h3>

            <p className="text-gray-300 leading-8 mb-6">
              We are committed to delivering modern, durable and affordable
            construction solutions while maintaining the highest standards
            of professionalism, integrity and customer satisfaction.
            </p>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="space-y-6"
          >

            {achievements.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="flex items-center gap-6 bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300"
                >

                  <div className="w-20 h-20 rounded-xl bg-blue-600/20 flex items-center justify-center">

                    <Icon className="w-10 h-10 text-blue-400" />

                  </div>

                  <div>

                    <h3 className="text-5xl font-black text-blue-400">

                      {item.value}

                    </h3>

                    <p className="text-lg text-gray-300 mt-2">

                      {item.title}

                    </p>

                  </div>

                </motion.div>
              );
            })}

          </motion.div>

        </div>

      </div>
    </section>
  );
}