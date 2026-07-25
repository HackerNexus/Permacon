"use client";

import { motion } from "framer-motion";
import {
  Eye,
  Target,
  ShieldCheck,
  HeartHandshake,
  BadgeCheck,
  Hammer,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We uphold honesty, transparency and accountability in every project we undertake.",
  },
  {
    icon: BadgeCheck,
    title: "Quality",
    description:
      "We are committed to delivering durable, reliable and high-quality construction services.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Commitment",
    description:
      "Our clients remain at the heart of every decision, ensuring satisfaction from start to finish.",
  },
  {
    icon: Hammer,
    title: "Professionalism",
    description:
      "We maintain the highest standards of workmanship, safety and project management.",
  },
];

export default function VisionMission() {
  return (
    <section
      id="vision"
      className="py-24 bg-[#050816] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
            Vision & Mission 
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto">
            Everything we do is guided by a clear vision, a strong mission,
            and values that define who we are as a construction company.
          </p>
        </motion.div>

        {/* Vision + Mission */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-blue-500 transition"
          >

            <div className="w-16 h-16 rounded-xl bg-blue-600/20 flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-blue-400" />
            </div>

            <h3 className="text-3xl font-bold mb-5 text-blue-400">
              Our Vision
            </h3>

            <p className="text-gray-300 leading-8">
              To become one of Kenya's most trusted construction companies,
              recognized for delivering innovative, sustainable and
              high-quality construction solutions that improve communities
              and create lasting value. Permacon Enterprises vision is to be 
              the preferred provider of cost effective and innovative 
              construction solutions to our customers. 
            </p>

          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-blue-500 transition"
          >

            <div className="w-16 h-16 rounded-xl bg-blue-600/20 flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-blue-400" />
            </div>

            <h3 className="text-3xl font-bold mb-5 text-blue-400">
              Our Mission
            </h3>

            <p className="text-gray-300 leading-8">
              To provide cost-effective and innovative 
              construction solutions that satisfy the needs of our 
              customers whilst guaranteeing continuous development and 
              benefit to our employees. Permacon Enterprises mission is 
              to deliver reliable construction services through workmanship, 
              quality materials, innovation and professional project management 
              while ensuring customer satisfaction, safety and timely project completion.
            </p>

          </motion.div>

        </div>

        

      </div>
    </section>
  );
}