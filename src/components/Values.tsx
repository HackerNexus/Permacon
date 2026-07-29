import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Handshake,
  Lightbulb,
  Target,
  Users,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We conduct every project with honesty, transparency and accountability.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "We deliver durable construction solutions using skilled workmanship and premium materials.",
  },
  {
    icon: Handshake,
    title: "Customer Commitment",
    description:
      "Our clients remain at the heart of every decision from consultation to project completion.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace modern construction technologies and creative engineering solutions.",
  },
];

export default function Values() {
  return (
    <section
      id="values"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050816] overflow-hidden"
    >

      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-16"
        >

          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-5 py-2 text-blue-300 text-sm mb-5">
            <Target className="w-4 h-4" />
            What Drives Us
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white">
            Our Core <span className="text-blue-400">Values</span>
          </h2>

          <p className="mt-5 text-gray-400 max-w-3xl mx-auto text-lg">
            Every project undertaken by Permacon Enterprises is guided by
            principles that define our workmanship, relationships and
            commitment to excellence.
          </p>

        </motion.div>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {values.map((value, index) => {

            const Icon = value.icon;

            return (

              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * .15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-8
                  text-center
                  transition-all
                  hover:border-blue-500/50
                  hover:shadow-xl
                  hover:shadow-blue-500/10
                "
              >

                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: .6 }}
                  className="
                    inline-flex
                    p-5
                    rounded-2xl
                    bg-blue-600/20
                    mb-6
                  "
                >

                  <Icon className="w-10 h-10 text-blue-400" />

                </motion.div>


                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>


                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>


              </motion.div>

            );
          })}

        </div>


      </div>

    </section>
  );
}