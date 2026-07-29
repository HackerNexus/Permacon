"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone, ShieldCheck } from "lucide-react";
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

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-cyan-500/20 bg-[#08101f]/85 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,.35)]"
          : "bg-transparent"
      }`}
    >

      <div className="mx-auto max-w-7xl">

        <div className="flex h-20 items-center justify-between px-4 md:px-8">

          {/* LOGO */}

          <motion.a
            href="#home"
            whileHover={{ scale: 1.03 }}
            className="group flex items-center gap-4"
          >

            <motion.img
              whileHover={{
                rotate: 2,
                scale: 1.08,
              }}
              transition={{ duration: .3 }}
              src="/images/logo.jpg"
              alt="Permacon Enterprises"
              className="h-14 w-auto rounded-xl object-contain shadow-lg md:h-16"
            />

            <div>

              <h1 className="text-xl font-bold leading-none text-white md:text-2xl">

                Permacon

              </h1>

              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 bg-clip-text text-sm uppercase tracking-[0.35em] text-transparent">

                Enterprises

              </span>

            </div>

          </motion.a>
                    {/* DESKTOP MENU */}

          <nav className="hidden lg:flex items-center gap-10">

            {navigation.map((item) => (

              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className={`relative text-[15px] font-medium transition ${
                  activeSection === item.href.substring(1)
                    ? "text-cyan-300"
                    : "text-gray-300 hover:text-cyan-300"
                }`}
              >

                {item.name}

                {activeSection === item.href.substring(1) && (

                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  />

                )}

              </motion.a>

            ))}

          </nav>

          {/* RIGHT SIDE */}

          <div className="hidden lg:flex items-center gap-4">

            <motion.div
              whileHover={{
                y: -2,
                scale: 1.04,
              }}
            >

              <Link
                to="/admin/login"
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-white/5 px-5 py-3 font-semibold text-cyan-300 backdrop-blur-md transition hover:border-cyan-400 hover:bg-cyan-500/10"
              >

                <ShieldCheck className="h-4 w-4 transition group-hover:rotate-6" />

                Admin

              </Link>

            </motion.div>

            <motion.a
              href="#booking"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(0,190,255,.35)",
              }}
              whileTap={{
                scale: .96,
              }}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 px-6 py-3 font-semibold text-white shadow-lg transition"
            >

              <Phone className="h-4 w-4 transition group-hover:rotate-12" />

              Get Quote

            </motion.a>

          </div>

          {/* MOBILE MENU BUTTON */}

          <motion.button
            whileTap={{ scale: .9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl p-2 text-white transition hover:bg-white/10 lg:hidden"
          >

            {menuOpen ? (

              <X className="h-8 w-8 transition hover:rotate-90" />

            ) : (

              <Menu className="h-8 w-8 transition hover:scale-110" />

            )}

          </motion.button>

        </div>

      </div>

      {/* MOBILE MENU */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: .25 }}
            className="border-t border-cyan-500/20 bg-[#08101f]/95 backdrop-blur-xl lg:hidden"
          >

            <div className="space-y-5 px-6 py-8">

              {navigation.map((item) => (

                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ x: 8 }}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-lg font-medium transition ${
                    activeSection === item.href.substring(1)
                      ? "text-cyan-300"
                      : "text-gray-300 hover:text-cyan-300"
                  }`}
                >

                  {item.name}

                </motion.a>

              ))}

              <motion.div
                whileHover={{ scale: 1.02 }}
              >

                <Link
                  to="/admin/login"
                  onClick={() => setMenuOpen(false)}
                  className="mb-4 flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-white/5 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-500/10"
                >

                  <ShieldCheck className="h-4 w-4" />

                  Admin Login

                </Link>

              </motion.div>

              <motion.a
                href="#booking"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: .96 }}
                onClick={() => setMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 py-3 font-semibold text-white"
              >

                <Phone className="h-4 w-4" />

                Get Quote

              </motion.a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>

  );

}