"use client";

import { motion } from "framer-motion";
import {
  Users,
  HeartHandshake,
  ShieldCheck,
  Award,
  CheckCircle2,
} from "lucide-react";

const values = [
  "Integrity in every project we undertake.",
  "Commitment to quality workmanship.",
  "Customer satisfaction is our priority.",
  "Professionalism and accountability.",
  "Innovation and continuous improvement.",
  "Environmental responsibility and sustainability.",
];

export default function Team() {
  return (
    <section
      id="team"
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
            Our Team
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            At Permacon Enterprises, our strength lies in our experienced,
            dedicated and highly skilled professionals who work together to
            deliver quality construction projects across Kenya. </p><br/>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            PERMACON ENTERPRISES is led by a small group of Construction managers, 
            and designers who have worked together for most of the company's history. 
            Every project is staffed with our own carpenters, masons, steel fixers, 
            and site supervisors — not rotating day labor — so the crew that starts 
            your project is the crew that finishes it.
          </p>
        </motion.div>

        {/* Team Description */}

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="w-20 h-20 rounded-2xl bg-blue-600/20 flex items-center justify-center mb-8">
              <Users className="w-10 h-10 text-blue-400" />
            </div>

            <h3 className="text-3xl font-bold mb-6">
              Experienced Professionals
            </h3>

            <p className="text-gray-400 leading-8 mb-6">
              Our multidisciplinary team consists of experienced engineers,
              project managers, architects, quantity surveyors, skilled
              technicians and construction specialists working together to
              deliver exceptional results.
            </p>

            <p className="text-gray-400 leading-8">
              Every project is handled with professionalism, transparency,
              technical expertise and a commitment to exceeding our clients'
              expectations.
            </p>

          </motion.div>

          {/* Values */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-10"
          >

            <div className="flex items-center gap-4 mb-8">

              <HeartHandshake className="w-10 h-10 text-blue-400" />

              <h3 className="text-3xl font-bold">
                Our Core Values
              </h3>

            </div>

            <div className="space-y-5">

              {values.map((value, index) => (

                <div
                  key={index}
                  className="flex items-start gap-4"
                >

                  <CheckCircle2 className="text-green-400 mt-1 w-6 h-6 flex-shrink-0" />

                  <span className="text-gray-300 leading-7">
                    {value}
                  </span>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

        {/* Safety Policy */}

<motion.div
  initial={{ opacity: 0, y: 35 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="bg-gradient-to-r from-blue-900/40 to-blue-600/10 border border-blue-500/20 rounded-3xl p-10"
>
  <div className="grid lg:grid-cols-2 gap-10 items-center">

    {/* Left Card */}

    <div>

      <div className="flex items-center gap-4 mb-6">

        <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center">
          <ShieldCheck className="w-8 h-8 text-blue-400" />
        </div>

        <h3 className="text-3xl font-bold flex items-center gap-3">
          <Award className="text-blue-400" />
          Safety Policy
        </h3>

      </div>

      <p className="text-gray-300 leading-8 mb-8">
        Safety is an integral part of every project undertaken by
        Permacon Enterprises. We believe every employee, client,
        supplier and visitor deserves a safe and secure working
        environment throughout every stage of construction.
      </p>

      <div className="grid sm:grid-cols-2 gap-5">

        <div className="flex gap-3">
          <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" />
          <span>Compliance with construction safety regulations.</span>
        </div>

        <div className="flex gap-3">
          <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" />
          <span>Regular safety inspections and audits.</span>
        </div>

        <div className="flex gap-3">
          <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" />
          <span>Proper use of Personal Protective Equipment (PPE).</span>
        </div>

        <div className="flex gap-3">
          <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" />
          <span>Continuous staff safety training.</span>
        </div>

        <div className="flex gap-3">
          <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" />
          <span>Environmental protection throughout construction.</span>
        </div>

        <div className="flex gap-3">
          <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" />
          <span>Zero compromise on health and safety standards.</span>
        </div>

      </div>

    </div>

    {/* Right Card */}

    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
    >

      <img
        src="/images/14.jpeg"
        alt="Permacon Safety Policy"
        className="w-full h-full object-cover"
      />

    </motion.div>

  </div>

</motion.div>

      </div>
    </section>
  );
}