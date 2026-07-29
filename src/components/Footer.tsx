"use client";

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Custom Home Design",
    "New Building Construction",
    "Renovations & Additions",
    "Finish & Interior Build-Out",
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#041020] via-[#071B35] to-[#02060E] border-t border-cyan-500/20 text-white">

      {/* Blue Glow */}

      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        {/* TOP SECTION */}

        <div className="grid gap-10 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1.3fr] md:grid-cols-2">

          {/* COMPANY */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <motion.img
              whileHover={{
                scale: 1.05,
                rotate: 2,
              }}
              transition={{ duration: .3 }}
              src="/images/logo.jpg"
              alt="Permacon Enterprises"
              className="h-24 w-auto object-contain mb-7 rounded-xl shadow-2xl"
            />

            <p className="text-gray-300 leading-8">

              Permacon Enterprises is committed to delivering exceptional
              construction, engineering and renovation services across
              Kenya through innovation, integrity, safety and
              professionalism.

            </p>

            {/* SOCIALS */}

            <div className="flex gap-4 mt-10">

              {[
                {
                  bg: "bg-[#1877F2]",
                  icon: "/images/icons/facebook.svg",
                  link: "https://facebook.com",
                },
                {
                  bg: "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
                  icon: "/images/icons/instagram.svg",
                  link: "https://instagram.com",
                },
                {
                  bg: "bg-white",
                  icon: "/images/icons/x.svg",
                  link: "https://x.com",
                },
                {
                  bg: "bg-[#25D366]",
                  icon: "/images/icons/whatsapp.svg",
                  link: "https://wa.me/254728590996",
                },
              ].map((social, index) => (

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
                  className={`${social.bg} p-4 rounded-2xl shadow-xl transition-all duration-300`}
                >

                  <img
                    src={social.icon}
                    alt=""
                    className="w-6 h-6"
                  />

                </motion.a>

              ))}

            </div>

          </motion.div>

          {/* QUICK LINKS */}
          {/* QUICK LINKS */}

<motion.div
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>

  <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
    Quick Links
  </h3>

  <ul className="space-y-5">

    {quickLinks.map((link) => (

      <li key={link.name}>

        <a
          href={link.href}
          className="group flex items-center gap-3 text-gray-400 transition-all duration-300 hover:text-cyan-300"
        >

          <span className="w-2 h-2 rounded-full bg-cyan-400 opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all" />

          {link.name}

        </a>

      </li>

    ))}

  </ul>

</motion.div>

{/* SERVICES */}

<motion.div
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>

  <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
    Our Services
  </h3>

  <ul className="space-y-5">

    {services.map((service) => (

      <li
        key={service}
        className="group flex items-start gap-3 text-gray-400 transition-all duration-300 hover:text-cyan-300"
      >

        <span className="mt-2 w-2 h-2 rounded-full bg-blue-500 group-hover:bg-cyan-400 transition-all" />

        <span>{service}</span>

      </li>

    ))}

  </ul>

</motion.div>

{/* CONTACT */}

<motion.div
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>

  <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
    Contact Info
  </h3>

  <div className="space-y-6">

    <motion.div
      whileHover={{ x: 6 }}
      className="flex items-start gap-4"
    >

      <div className="bg-green-500/15 p-3 rounded-xl">

        <Phone className="w-5 h-5 text-green-400" />

      </div>

      <a
        href="tel:+254728590996"
        className="text-gray-400 hover:text-green-400 transition"
      >

        +254 728 590 996

      </a>

    </motion.div>

    <motion.div
      whileHover={{ x: 6 }}
      className="flex items-start gap-4"
    >

      <div className="bg-red-500/15 p-3 rounded-xl">

        <Mail className="w-5 h-5 text-red-400" />

      </div>

      <div className="flex flex-col gap-2">

        <a
          href="mailto:permaconenterprises@gmail.com"
          className="text-gray-400 hover:text-red-400 transition break-all"
        >

          permaconenterprises@gmail.com

        </a>

        <a
          href="mailto:wainainarkuria@gmail.com"
          className="text-gray-400 hover:text-red-400 transition break-all"
        >

          wainainarkuria@gmail.com

        </a>

      </div>

    </motion.div>

    <motion.div
      whileHover={{ x: 6 }}
      className="flex items-start gap-4"
    >

      <div className="bg-orange-500/15 p-3 rounded-xl">

        <MapPin className="w-5 h-5 text-orange-400" />

      </div>

      <span className="text-gray-400">

        Nairobi, Kenya

      </span>

    </motion.div>

    <motion.div
      whileHover={{ x: 6 }}
      className="flex items-start gap-4"
    >

      <div className="bg-cyan-500/15 p-3 rounded-xl">

        <Clock className="w-5 h-5 text-cyan-400" />

      </div>

      <span className="text-gray-400">

        Mon – Sat
        <br />
        8:00 AM – 5:00 PM

      </span>

    </motion.div>

  </div>
 
</motion.div>
</div>
        {/* ================= BOTTOM ================= */}

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="border-t border-cyan-500/20 mt-16 pt-8"
>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

    {/* Left */}

    <div className="text-left">

      <p className="text-gray-400">

        © {new Date().getFullYear()}{" "}

        <span className="font-semibold text-white">

          Permacon Enterprises

        </span>

      </p>

      <p className="text-gray-500">

        All Rights Reserved.

      </p>

    </div>

    {/* Middle Left */}

    <div className="text-center">

      <p className="text-cyan-400 font-semibold">

        Building Excellence

      </p>

      <p className="text-gray-400">

        Through Quality,
        Integrity & Innovation.

      </p>

    </div>

    {/* Middle Right */}

    <div className="text-center">

      <Link
        to="/privacy-policy"
        className="text-gray-400 hover:text-cyan-300 transition"
      >

        Privacy Policy

      </Link>

    </div>

    {/* Right */}

    <div className="text-right">

      <p className="text-gray-400">

        Developed by <br></br>
      <a
        href="https://github.com/HackerNexus"
        target="_blank"
        rel="noreferrer"
        className="font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 bg-clip-text text-transparent"
      >
        NetChuck
      </a>
      </p>
    </div>

  </div>

</motion.div>
</div>
</footer>
  );
}