"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

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
      className="py-24 bg-[#050816] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-5">
            What Our Clients Say
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Customer satisfaction is at the heart of everything we do.
            Here are some experiences shared by our valued clients.
          </p>
        </motion.div>

        {/* Testimonials */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-blue-500 transition-all duration-300"
            >

              {/* Quote Icon */}

              <div className="absolute top-6 right-6">

                <Quote
                  className="w-12 h-12 text-blue-500/20"
                />

              </div>

              {/* Rating */}

              <div className="flex gap-1 mb-5">

                {[...Array(item.rating)].map((_, i) => (

                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />

                ))}

              </div>

              {/* Feedback */}

              <p className="text-gray-300 leading-8 mb-8 italic">
                "{item.feedback}"
              </p>

              {/* Client */}

              <div className="border-t border-white/10 pt-5">

                <h3 className="font-semibold text-xl">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.location}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Bottom Statistics */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >

          <div className="text-center">

            <h3 className="text-5xl font-bold text-blue-400">
              98%
            </h3>

            <p className="text-gray-400 mt-2">
              Client Satisfaction
            </p>

          </div>

          <div className="text-center">

            <h3 className="text-5xl font-bold text-blue-400">
              10+
            </h3>

            <p className="text-gray-400 mt-2">
              Projects Completed
            </p>

          </div>

          <div className="text-center">

            <h3 className="text-5xl font-bold text-blue-400">
              2+
            </h3>

            <p className="text-gray-400 mt-2">
              Years Experience
            </p>

          </div>

          <div className="text-center">

            <h3 className="text-5xl font-bold text-blue-400">
              100%
            </h3>

            <p className="text-gray-400 mt-2">
              Commitment
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}