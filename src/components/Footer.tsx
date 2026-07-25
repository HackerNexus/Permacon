"use client";

import React from "react";
import { Link } from "react-router-dom";
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
    <footer className="bg-[#050816] border-t border-white/10 text-white">

      <div className="max-w-7xl mx-auto pl-16 pr-6 py-20">

        {/* TOP SECTION */}

        <div className="grid gap-6 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1.3fr] md:grid-cols-2">

          {/* COMPANY */}

          <div className="lg:col-span-1">

            <img
              src="/images/logo.jpg"
              alt="Permacon Enterprises"
              className="h-20 w-auto object-contain mb-6"
            />

            <p className="text-gray-400 leading-8">
              Permacon Enterprises is committed to
              delivering quality construction,
              engineering and renovation services
              across Kenya through innovation,
              integrity and professionalism.
            </p>

            {/* SOCIALS */}

<div className="flex gap-4 mt-8">

  <a
    href="https://facebook.com"
    target="_blank"
    rel="noreferrer"
    className="bg-[#1877F2] hover:opacity-90 transition p-3 rounded-xl shadow-lg"
  >
    <img
      src="/images/icons/facebook.svg"
      alt="Facebook"
      className="w-5 h-5"
    />
  </a>

  <a
    href="https://instagram.com"
    target="_blank"
    rel="noreferrer"
    className="bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-90 transition p-3 rounded-xl shadow-lg"
  >
    <img
      src="/images/icons/instagram.svg"
      alt="Instagram"
      className="w-5 h-5"
    />
  </a>

  <a
    href="https://x.com"
    target="_blank"
    rel="noreferrer"
    className="bg-white hover:bg-neutral-800 transition p-3 rounded-xl shadow-lg"
  >
    <img
      src="/images/icons/x.svg"
      alt="X"
      className="w-5 h-5"
    />
  </a>

  <a
    href="https://wa.me/254728590996"
    target="_blank"
    rel="noreferrer"
    className="bg-[#25D366] hover:opacity-90 transition p-3 rounded-xl shadow-lg"
  >
    <img
      src="/images/icons/whatsapp.svg"
      alt="WhatsApp"
      className="w-5 h-5"
    />
  </a>

</div>

          </div>

          {/* QUICK LINKS */}

          <div>

            <h3 className="text-xl font-bold mb-6 text-blue-400 gap-1">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {quickLinks.map((link) => (

                <li key={link.name}>

                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition"
                  >
                    {link.name}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* SERVICES */}

          <div>

            <h3 className="text-xl font-bold mb-6 text-blue-400 gap-1">
              Our Services
            </h3>

            <ul className="space-y-4">

              {services.map((service) => (

                <li
                  key={service}
                  className="text-gray-400"
                >
                  • {service}
                </li>

              ))}

            </ul>

          </div>

          {/* CONTACT */}

          <div>

            <h3 className="text-xl font-bold mb-6 text-blue-400">
              Contact Info
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-3">

                <div className="bg-green-500/15 p-2 rounded-lg">
                  <Phone className="w-5 h-5 text-green-500" />
                </div>

                <a
                  href="tel:+254728590996"
                  className="text-gray-400 hover:text-green-400 transition"
                >
                  +254 728 590 996
                </a>

              </div>

              <div className="flex items-start gap-3">

                <div className="bg-red-500/15 p-2 rounded-lg">
                  <Mail className="w-5 h-5 text-red-500" />
                </div>

                <div className="flex flex-col">

                  <a
                    href="mailto:permaconenterprises@gmail.com"
                    className="text-gray-400 hover:text-red-400 transition"
                  >
                    permaconenterprises@gmail.com
                  </a>

                  <a
                    href="mailto:wainainarkuria@gmail.com"
                    className="text-gray-400 hover:text-red-400 transition"
                  >
                    wainainarkuria@gmail.com
                  </a>

                </div>

              </div>

              <div className="flex items-start gap-3">

                <div className="bg-orange-500/15 p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-orange-500" />
                </div>

                <span className="text-gray-400">
                  Nairobi, Kenya
                </span>

              </div>

              <div className="flex items-start gap-3">

                <div className="bg-cyan-500/15 p-2 rounded-lg">
                  <Clock className="w-5 h-5 text-cyan-400" />
                </div>

                <span className="text-gray-400">
                  Mon - Sat
                  <br />
                  8:00 AM - 5:00 PM
                </span>

              </div>

            </div>

          </div>

        </div>
                {/* BOTTOM */}

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6">

          <div className="text-gray-400 text-center lg:text-left">

            © {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">
              Permacon Enterprises
            </span>
            . All Rights Reserved.

          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm">

            <Link
              to="/privacy-policy"
              className="hover:text-blue-400 transition"
            >
              Privacy Policy
            </Link>

            <span className="text-white/20">
              |
            </span>

            <p
              
              className="hover:text-blue-400 transition"
            >
              Developed by NetChuck
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}