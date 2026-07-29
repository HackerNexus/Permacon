"use client";

import { motion } from "framer-motion";
import {
  Star,
  Quote,
  MapPin,
  BadgeCheck,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "John Mwangi",
    location: "Nairobi",
    rating: 5,
    feedback:
      "Permacon Enterprises exceeded our expectations. The workmanship was excellent, the project was completed on schedule, and the team remained professional throughout the construction process.",
  },
  {
    id: 2,
    name: "Faith Njeri",
    location: "Kiambu",
    rating: 5,
    feedback:
      "Our residential house turned out exactly as we envisioned. The quality of finishing and communication throughout the project was outstanding.",
  },
  {
    id: 3,
    name: "David Kiptoo",
    location: "Nakuru",
    rating: 5,
    feedback:
      "Highly skilled professionals with excellent customer service. I would confidently recommend Permacon Enterprises to anyone looking for reliable construction services.",
  },
  {
    id: 4,
    name: "Grace Atieno",
    location: "Mombasa",
    rating: 4,
    feedback:
      "The project was handled professionally from planning to completion. The team listened to our requirements and delivered quality work.",
  },
  {
    id: 5,
    name: "Peter Ouma",
    location: "Kisumu",
    rating: 5,
    feedback:
      "Exceptional workmanship, transparent pricing and timely completion. I am impressed by their professionalism.",
  },
  {
    id: 6,
    name: "Mercy Wanjiku",
    location: "Machakos",
    rating: 5,
    feedback:
      "Very organized company with experienced engineers. We are extremely satisfied with the final results.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-br from-[#06111F] via-[#0A2A57] to-[#041024] text-white relative overflow-hidden"
    >

      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-600/20 blur-[140px]" />

        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full bg-cyan-500/10 blur-[160px]" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center mb-20"
        >

          <span className="uppercase tracking-[0.35em] text-cyan-300 text-sm font-semibold">

            Client Reviews

          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-black">

            What Our Clients Say

          </h2>

          <p className="mt-6 text-gray-300 text-lg max-w-3xl mx-auto leading-8">

            Customer satisfaction is the foundation of our reputation.
            Every completed project reflects our commitment to quality,
            professionalism and long-term relationships.

          </p>

        </motion.div>

        {/* Testimonials */}
                {/* Testimonials */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .12,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500"
            >

              {/* Glow */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent" />

              {/* Quote */}

              <div className="relative flex items-center justify-between mb-6">

                <div className="flex gap-1">

                  {[...Array(item.rating)].map((_, i) => (

                    <motion.div
                      key={i}
                      whileHover={{
                        rotate: 360,
                        scale: 1.25,
                      }}
                      transition={{
                        duration: .5,
                      }}
                    >

                      <Star
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />

                    </motion.div>

                  ))}

                </div>

                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.15,
                  }}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-600/30"
                >

                  <Quote className="w-7 h-7 text-white" />

                </motion.div>

              </div>

              {/* Feedback */}

              <p className="relative text-gray-200 italic leading-8 mb-8">

                "{item.feedback}"

              </p>

              {/* Divider */}

              <div className="border-t border-white/10 pt-6">

                <div className="flex items-center justify-between">

                  <div>

                    <div className="flex items-center gap-2">

                      <h3 className="font-bold text-xl">

                        {item.name}

                      </h3>

                      <BadgeCheck className="w-5 h-5 text-cyan-400" />

                    </div>

                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">

                      <MapPin className="w-4 h-4 text-blue-400" />

                      <span>

                        {item.location}

                      </span>

                    </div>

                  </div>

                  <div className="px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-cyan-300 text-xs uppercase tracking-wider">

                    Verified

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>
                {/* ================= Statistics ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24"
        >

          {[
            {
              value: "98%",
              title: "Client Satisfaction",
            },
            {
              value: "100+",
              title: "Projects Completed",
            },
            {
              value: "10+",
              title: "Years Experience",
            },
            {
              value: "100%",
              title: "Commitment",
            },
          ].map((stat, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{
                duration: .3,
              }}
              className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 text-center hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500"
            >

              <h3 className="text-5xl font-black bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent mb-3">

                {stat.value}

              </h3>

              <p className="text-gray-300">

                {stat.title}

              </p>

            </motion.div>

          ))}

        </motion.div>

      </div>
    </section>
  );
}