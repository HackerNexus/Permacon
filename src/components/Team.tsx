"use client";
import { motion, useMotionValue, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  Users,
  HeartHandshake,
  ShieldCheck,
  Award,
  CheckCircle2,
  BriefcaseBusiness,
  Building2,
  Star,
} from "lucide-react";

const values = [
  "Integrity in every project we undertake.",
  "Commitment to quality workmanship.",
  "Customer satisfaction is our priority.",
  "Professionalism and accountability.",
  "Innovation and continuous improvement.",
  "Environmental responsibility and sustainability.",
];

const stats = [
  {
    icon: Users,
    number: 20,
    suffix: "+",
    title: "Professionals",
  },
  {
    icon: Building2,
    number: 100,
    suffix: "+",
    title: "Projects Completed",
  },
  {
    icon: BriefcaseBusiness,
    number: 10,
    suffix: "+",
    title: "Years Experience",
  },
  {
    icon: Star,
    number: 100,
    suffix: "%",
    title: "Client Satisfaction",
  },
];
function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, {
      duration: 2.5,
      ease: "easeOut",
      onUpdate(latest) {
        if (ref.current) {
          ref.current.textContent =
            Math.round(latest).toString() + suffix;
        }
      },
    });

    return () => controls.stop();
  }, [count, value, suffix, isInView]);

  return <span ref={ref}>0{suffix}</span>;
}
export default function Team() {
  return (
    <section
      id="team"
      className="relative overflow-hidden py-28 bg-gradient-to-br from-[#03132E] via-[#072B63] to-[#020817] text-white"
    >
      {/* Background Glow */}

      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center mb-20"
        >

          <span className="inline-block px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm tracking-widest uppercase mb-6">

            Meet Our Experts

          </span>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">

            The Team Behind Every
            <br />

            <span className="text-blue-400">
              Successful Project
            </span>

          </h2>

          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-9">

            Permacon Enterprises is powered by experienced construction
            professionals, engineers, designers and site supervisors
            committed to delivering safe, innovative and high-quality
            construction projects across Kenya.

          </p>

        </motion.div>

        {/* Statistics */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .6,
                  delay: index * .15,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-blue-500/20 bg-white/5 backdrop-blur-xl p-8 text-center hover:border-cyan-400 transition-all duration-500"
              >

                <div className="mx-auto mb-5 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">

                  <Icon className="w-8 h-8 text-white" />

                </div>

                <div className="text-5xl font-black text-white mb-3">

                  <AnimatedCounter
  value={item.number}
  suffix={item.suffix}
/>

                </div>

                <p className="text-gray-400">

                  {item.title}

                </p>

              </motion.div>

            );

          })}

        </div>

        {/* Main Content */}

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">

          {/* Left Card */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-10 shadow-xl"
          >

            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-8">

              <Users className="w-10 h-10 text-white" />

            </div>

            <h3 className="text-3xl font-bold mb-6">

              Experienced Professionals

            </h3>

            <p className="text-gray-300 leading-8 mb-6">

              Our multidisciplinary team consists of experienced
              engineers, project managers, architects, quantity
              surveyors, skilled technicians and construction
              specialists who work together to deliver exceptional
              results for every client.

            </p>

            <p className="text-gray-400 leading-8">

              Every project is managed with professionalism,
              transparency, technical expertise and an unwavering
              commitment to quality, ensuring every structure
              stands the test of time.

            </p>

          </motion.div>

          {/* Core Values */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="rounded-3xl bg-gradient-to-br from-[#0B1E46]/90 to-[#102C63]/90 border border-blue-500/20 backdrop-blur-xl p-10 shadow-xl"
          >

            <div className="flex items-center gap-4 mb-10">

              <HeartHandshake className="w-10 h-10 text-cyan-400" />

              <h3 className="text-3xl font-bold">

                Our Core Values

              </h3>

            </div>

            <div className="space-y-5">

              {values.map((value, index) => (

                <motion.div
                  key={index}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4 rounded-xl bg-white/5 border border-white/10 px-5 py-4 hover:border-cyan-400 transition-all"
                >

                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />

                  <span className="text-gray-200 leading-7">

                    {value}

                  </span>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>
                {/* ===================== SAFETY POLICY ===================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="rounded-[32px] border border-blue-500/20 bg-gradient-to-br from-[#071B3A] via-[#0B2D61] to-[#06111F] overflow-hidden shadow-2xl"
        >

          <div className="grid lg:grid-cols-2">

            {/* Left */}

            <div className="p-12">

              <div className="flex items-center gap-4 mb-8">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">

                  <ShieldCheck className="w-8 h-8 text-white" />

                </div>

                <div>

                  <span className="uppercase tracking-[0.3em] text-cyan-300 text-xs">

                    Our Promise

                  </span>

                  <h3 className="text-4xl font-black">

                    Safety Policy

                  </h3>

                </div>

              </div>

              <p className="text-gray-300 leading-9 mb-10">

                Safety is an integral part of every project undertaken by
                Permacon Enterprises. Every employee, client, consultant
                and visitor deserves a secure working environment.
                We strictly follow national construction regulations,
                maintain continuous staff training and ensure every
                project is executed without compromising health,
                safety or environmental standards.

              </p>

              <div className="grid sm:grid-cols-2 gap-5">

                {[
                  "Compliance with construction safety regulations.",
                  "Regular safety inspections and audits.",
                  "Proper use of Personal Protective Equipment (PPE).",
                  "Continuous staff safety training.",
                  "Environmental protection throughout construction.",
                  "Zero compromise on health & safety standards.",
                ].map((item, index) => (

                  <motion.div
                    key={index}
                    whileHover={{
                      x: 8,
                      scale: 1.02,
                    }}
                    className="flex items-start gap-4 rounded-2xl bg-white/5 border border-white/10 px-5 py-4 hover:border-cyan-400 transition-all duration-300"
                  >

                    <CheckCircle2 className="text-green-400 mt-1 w-6 h-6 flex-shrink-0" />

                    <span className="text-gray-200 leading-7">

                      {item}

                    </span>

                  </motion.div>

                ))}

              </div>

            </div>

            {/* Right */}

            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              transition={{
                duration: .4,
              }}
              className="relative overflow-hidden"
            >

              <img
                src="/images/14.jpeg"
                alt="Permacon Safety Policy"
                className="w-full h-full object-contain bg-[#06111F] p-4 transition duration-500 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#041024]/80 via-transparent to-transparent" />

              <div className="absolute bottom-10 left-10 right-10">

                <div className="rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 p-6">

                  <h4 className="text-2xl font-bold mb-3">

                    Safety First

                  </h4>

                  <p className="text-gray-200 leading-7">

                    Every Permacon project follows strict quality
                    assurance, risk assessment and occupational
                    safety procedures to protect both our people
                    and our clients.

                  </p>

                </div>

              </div>

            </motion.div>

          </div>

        </motion.div>
              </div>
    </section>
  );
}