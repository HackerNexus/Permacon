"use client";

import {
  motion,
  animate,
  useInView,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
} from "react";
import {
  ArrowRight,
  Hammer,
  CheckCircle,
} from "lucide-react";

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate(latest) {
        setCount(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  {
    value: 2,
    suffix: "+",
    label: "Years in Business",
  },
  {
    value: 10,
    suffix: "+",
    label: "Homes Completed",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 md:pt-28 flex items-center overflow-hidden"
    >
      {/* Background Image */}

      <div className="absolute inset-0">
        <img
          src="/images/logo.jpg"
          alt="Permacon Enterprises"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#07111f]/95 via-[#07111f]/75 to-[#07111f]/40" />
      </div>

      {/* Decorative Blur */}

      <div className="absolute -top-44 -left-44 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[180px]" />

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-5xl md:text-7xl font-black leading-tight text-white">

              <span className="white-400 ">
                Building Dreams,
              </span>

              <span className="block text-blue-400">
                Building Trust.
              </span>

            </h1>

            <p className="mt-8 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">

              Permacon Enterprises delivers quality construction,
              renovations, residential developments and commercial
              projects through professionalism, innovation and
              unmatched craftsmanship.

            </p>

            {/* FEATURES */}

            <div className="mt-10 space-y-4">

              {[
                "Residential Construction",
                "Commercial Construction",
                "Professional Renovations",
                "Quality Guaranteed",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <CheckCircle className="w-5 h-5 text-blue-400" />

                  <span className="text-gray-300">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            {/* BUTTONS */}

            <div className="mt-12 flex flex-wrap gap-5">

              <a
                href="#projects"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold shadow-lg"
              >
                View Projects

                <ArrowRight className="w-5 h-5" />

              </a>

              <a
                href="#booking"
                className="inline-flex items-center gap-3 border border-white/20 hover:border-blue-500 hover:bg-white/5 transition px-8 py-4 rounded-xl font-semibold"
              >
                Get Free Quote
              </a>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="hidden lg:flex justify-center"
          >

            <div className="relative">

              <div className="absolute -inset-6 rounded-[40px] bg-blue-600/20 blur-3xl" />

              <div className="relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-[35px] p-10 w-[420px]">

                <div className="flex justify-center mb-8">

                  <div className="w-28 h-28 rounded-full bg-blue-600/20 flex items-center justify-center">

                    <Hammer className="w-14 h-14 text-blue-400" />

                  </div>

                </div>

                <h3 className="text-3xl font-bold text-center mb-10">

                  Why Build With Us?

                </h3>

                <div className="space-y-6">

                  {[
                    "Experienced Professionals",
                    "Modern Equipment",
                    "Quality Materials",
                    "Projects Delivered On Time",
                    "Affordable Pricing",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >

                      <CheckCircle className="text-blue-400 w-5 h-5" />

                      <span className="text-gray-300">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </motion.div>

        </div>
                {/* STATS */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24"
        >

          {stats.map((item) => (

            <div
              key={item.label}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >

              <h2 className="text-5xl font-black text-blue-400">

                <AnimatedCounter
                  value={item.value}
                  suffix={item.suffix}
                />

              </h2>

              <p className="mt-3 text-gray-300">

                {item.label}

              </p>

            </div>

          ))}

        </motion.div>

      </div>

    </section>

  );
}