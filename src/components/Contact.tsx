"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      icon: Phone,
      title: "Phone",
      value: "+254 728 590 996",
      href: "tel:+254728590996",
      color: "text-green-400",
      bg: "bg-green-500/15",
      border: "group-hover:border-green-400/40",
    },
    {
      icon: Mail,
      title: "Email",
      value: "permaconenterprises@gmail.com",
      href: "mailto:permaconenterprises@gmail.com",
      color: "text-orange-400",
      bg: "bg-orange-500/15",
      border: "group-hover:border-orange-400/40",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "Nairobi, Kenya",
      href: "#",
      color: "text-red-400",
      bg: "bg-red-500/15",
      border: "group-hover:border-red-400/40",
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "Mon - Sat | 8:00 AM - 5:00 PM",
      href: "#",
      color: "text-cyan-400",
      bg: "bg-cyan-500/15",
      border: "group-hover:border-cyan-400/40",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-[#06111F] via-[#0A2A57] to-[#041024] text-white"
    >

      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute -top-40 left-0 w-[32rem] h-[32rem] rounded-full bg-blue-600/15 blur-[150px]" />

        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full bg-cyan-500/10 blur-[170px]" />

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

            Get In Touch

          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-black">

            Contact Us

          </h2>

          <p className="mt-6 text-gray-300 text-lg max-w-3xl mx-auto leading-8">

            We'd love to hear from you. Contact us today for professional
            construction solutions, free consultation and project quotations.

          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT */}
                    {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="space-y-6"
          >

            {contacts.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={index}
                  whileHover={{
                    x: 8,
                    y: -4,
                  }}
                  transition={{
                    duration: .3,
                  }}
                  className={`group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/10 ${item.border}`}
                >

                  <div className="flex items-start gap-5">

                    <div
                      className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center transition-all duration-500 group-hover:scale-110`}
                    >

                      <Icon
                        className={`w-8 h-8 ${item.color}`}
                      />

                    </div>

                    <div className="flex-1">

                      <h3 className="text-2xl font-bold mb-2">

                        {item.title}

                      </h3>

                      {item.href !== "#" ? (

                        <a
                          href={item.href}
                          className="text-gray-300 hover:text-cyan-300 transition leading-7 break-all"
                        >

                          {item.value}

                        </a>

                      ) : (

                        <p className="text-gray-300 leading-7">

                          {item.value}

                        </p>

                      )}

                    </div>

                  </div>

                </motion.div>

              );

            })}

            {/* Social Media */}

            <div className="pt-8">

              <h3 className="text-2xl font-bold mb-6">

                Follow Us

              </h3>

              <div className="flex gap-5">

                {[
                  {
                    icon: Facebook,
                    color: "#1877F2",
                    link: "https://facebook.com",
                  },
                  {
                    icon: Instagram,
                    color: "#E4405F",
                    link: "https://instagram.com",
                  },
                  {
                    icon: Linkedin,
                    color: "#0A66C2",
                    link: "https://linkedin.com",
                  },
                ].map((social, index) => {

                  const SocialIcon = social.icon;

                  return (

                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{
                        y: -6,
                        scale: 1.12,
                        rotate: 5,
                      }}
                      whileTap={{
                        scale: .95,
                      }}
                      className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
                    >

                      <SocialIcon
                        size={28}
                        style={{
                          color: social.color,
                        }}
                      />

                    </motion.a>

                  );

                })}

              </div>

            </div>

          </motion.div>

          {/* MAP */}
                    {/* MAP */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <motion.div
              whileHover={{
                scale: 1.01,
              }}
              transition={{
                duration: .35,
              }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl hover:border-cyan-400 hover:shadow-cyan-500/20 transition-all duration-500"
            >

              <iframe
                title="Permacon Enterprises Location"
                src="https://www.google.com/maps?q=Nairobi,Kenya&output=embed"
                loading="lazy"
                allowFullScreen
                className="w-full h-[560px]"
              />

            </motion.div>

          </motion.div>

        </div>

        {/* ================= CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="relative overflow-hidden mt-24 rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-[#0A4FA8] via-[#1268D6] to-[#0D3F84] p-12 text-center shadow-2xl shadow-blue-900/30"
        >

          {/* Glow */}

          <div className="absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-[90px]" />

          <div className="relative z-10">

            <h3 className="text-4xl md:text-5xl font-black mb-6">

              Ready To Build With Confidence?

            </h3>

            <p className="max-w-3xl mx-auto text-blue-100 text-lg leading-8 mb-10">

              Whether you're planning a residential home, commercial
              development or renovation project, our experienced team is
              ready to turn your vision into reality with quality,
              transparency and professionalism.

            </p>

            <motion.a
              href="#booking"
              whileHover={{
                scale: 1.06,
                y: -3,
              }}
              whileTap={{
                scale: .97,
              }}
              className="inline-flex items-center gap-3 rounded-2xl bg-white px-10 py-5 font-bold text-blue-700 shadow-xl transition-all duration-300 hover:bg-cyan-100"
            >

              Book A Free Consultation

              <ArrowRight className="w-5 h-5" />

            </motion.a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}