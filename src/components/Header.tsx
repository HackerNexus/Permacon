"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navigation.map((item) =>
        document.querySelector(item.href)
      );

      sections.forEach((section) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08101f]/90 backdrop-blur-xl shadow-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between h-20 px-4 md:px-8">

          {/* LOGO */}

          <a
            href="#home"
            className="flex items-center gap-4 group"
          >
            <img
              src="/images/logo.jpg"
              alt="Permacon Enterprises"
              className="h-14 md:h-16 w-auto object-contain transition duration-300 group-hover:scale-105"
            />

            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white leading-none">
                Permacon
              </h1>

              <span className="text-blue-400 text-sm tracking-widest uppercase">
                Enterprises
              </span>
            </div>
          </a>

          {/* DESKTOP MENU */}
          <Link
  to="/admin/login"
  className="inline-flex items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg"
>
  Admin
</Link>

          <nav className="hidden lg:flex items-center gap-10">

            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative text-[15px] font-medium transition ${
                  activeSection === item.href.substring(1)
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-blue-400"
                }`}
              >
                {item.name}

                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute left-0 -bottom-2 w-full h-[2px] bg-blue-500 rounded-full"
                  />
                )}
              </a>
            ))}

          </nav>

          {/* RIGHT BUTTON */}

          <div className="hidden lg:flex">

            <a
              href="#booking"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white font-semibold shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Get Quote
            </a>

          </div>

          {/* MOBILE BUTTON */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white"
          >
            {menuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#08101f] border-t border-white/10"
          >
            <div className="px-6 py-8 space-y-5">

              {navigation.map((item) => (

                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-lg font-medium transition ${
                    activeSection === item.href.substring(1)
                      ? "text-blue-400"
                      : "text-gray-300"
                  }`}
                >
                  {item.name}
                </a>

              ))}

              <a
                href="#booking"
                onClick={() => setMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 w-full rounded-xl bg-blue-600 hover:bg-blue-700 transition py-3 font-semibold"
              >
                <Phone className="w-4 h-4" />
                Get Quote
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}