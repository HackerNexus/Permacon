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
} from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      icon: Phone,
      title: "Phone",
      value: "+254 728 590 996",
      href: "tel:+254728590996",
    },
    {
      icon: Mail,
      title: "Email",
      value: "permaconenterprises@gmail.com",
      href: "mailto:permaconenterprises@gmail.com",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "Nairobi, Kenya",
      href: "#",
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "Mon - Sat | 8:00 AM - 5:00 PM",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-[#081221] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-blue-400 mb-5">
            Contact Us
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We'd love to hear from you. Contact us today
            for professional construction solutions,
            free consultation and project quotations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {contacts.map((item, index) => {
              const Icon = item.icon;

              return (

                <motion.div
                  key={index}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-5 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500 transition-all"
                >

                  <div
  className={`p-4 rounded-xl ${
    item.title === "Phone"
      ? "bg-green-500/15"
      : item.title === "Email"
      ? "bg-red-500/15"
      : item.title === "Office"
      ? "bg-orange-500/15"
      : "bg-cyan-500/15"
  }`}
>
  <Icon
    className={`w-7 h-7 ${
      item.title === "Phone"
        ? "text-green-500"
        : item.title === "Email"
        ? "text-orange-500"
        : item.title === "Office"
        ? "text-red-500"
        : "text-cyan-400"
    }`}
  />
</div>

                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      {item.title}
                    </h3>

                    {item.href !== "#" ? (
                      <a
                        href={item.href}
                        className="text-gray-400 hover:text-blue-400 transition"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-400">
                        {item.value}
                      </p>
                    )}
                  </div>

                </motion.div>

              );
            })}

            {/* SOCIALS */}

            <div className="pt-6">

  <h3 className="text-2xl font-bold mb-6">
    Follow Us
  </h3>

  <div className="flex gap-5">

    <a
      href="https://facebook.com"
      target="_blank"
      rel="noreferrer"
      className="bg-white/5 p-4 rounded-xl border border-white/10 hover:scale-110 transition"
    >
      <Facebook
        size={22}
        className="text-[#1877F2]"
      />
    </a>

    <a
      href="https://instagram.com"
      target="_blank"
      rel="noreferrer"
      className="bg-white/5 p-4 rounded-xl border border-white/10 hover:scale-110 transition"
    >
      <Instagram
        size={22}
        className="text-[#E4405F]"
      />
    </a>

    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noreferrer"
      className="bg-white/5 p-4 rounded-xl border border-white/10 hover:scale-110 transition"
    >
      <Linkedin
        size={22}
        className="text-[#0A66C2]"
      />
    </a>

  </div>

</div>

          </motion.div>

          {/* MAP */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-full">

              <iframe
                title="Permacon Enterprises Location"
                src="https://www.google.com/maps?q=Nairobi,Kenya&output=embed"
                loading="lazy"
                className="w-full h-[520px]"
                allowFullScreen
              />

            </div>

          </motion.div>

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .4 }}
          className="mt-20 text-center bg-blue-600 rounded-3xl p-10"
        >

          <h3 className="text-3xl font-bold mb-4">
            Ready To Start Your Construction Project?
          </h3>

          <p className="text-blue-100 mb-8 text-lg">
            Contact Permacon Enterprises today for
            reliable, quality and affordable construction services.
          </p>

          <a
            href="#booking"
            className="inline-block bg-white text-blue-700 font-bold px-10 py-4 rounded-xl hover:bg-gray-100 transition"
          >
            Book A Consultation
          </a>

        </motion.div>

      </div>
    </section>
  );
}