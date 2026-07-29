"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  ArrowUpRight,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const projects = [
  {
    title: "Residential Development",
    location: "Nyandarua, Kenya",
    image: "/images/8.jpeg",
    description: "Tiling, Gypsum and paint works.",
  },
  {
    title: "Residential Construction",
    location: "Nakuru, Kenya",
    image: "/images/9.jpeg",
    description: "Custom new building in process.",
  },
  {
    title: "Proposed Design",
    location: "Kiambu, Kenya",
    image: "/images/3.jpg",
    description: "Proposed Residential Development.",
  },
  {
    title: "School/institutional Development",
    location: "Nakuru County, Kenya",
    image: "/images/4.jpg",
    description: "Classroom construction.",
  },
  {
    title: "Custom new build",
    location: "Nakuru County, Kenya",
    image: "/images/5.jpg",
    description: "Residential Development",
  },
  {
    title: "Residential Development",
    location: "Nakuru, Kenya",
    image: "/images/10.jpeg",
    description: "Structural works.",
  },
  {
    title: "Commercial Development",
    location: "Nakuru, Kenya",
    image: "/images/11.jpeg",
    description: "Paint and Granite works.",
  },
  {
    title: "Nakuru-Naivasha District Hospital",
    location: "Nakuru, Kenya",
    image: "/images/12.jpeg",
    description: "Door and Frames fitting.",
  },
  {
    title: "Residential Development",
    location: "Nakuru, Kenya",
    image: "/images/13.jpeg",
    description: "Custom new building upon completion.",
  },
  {
    title: "Residential Development",
    location: "Kiambu-Membley, Kenya",
    image: "/images/14.png",
    description: "Renovation Works.",
  },
  {
    title: "Institutional Development",
    location: "Meru University",
    image: "/images/15.jpeg",
    description: "Building construction.",
  },
  {
    title: "Residential Development",
    location: "Nyandarua, Kenya",
    image: "/images/16.jpeg",
    description: "Apartment construction.",
  },
  {
    title: "Residential Development",
    location: "Nairobi, Kenya",
    image: "/images/17.jpeg",
    description: "Custom New Building.",
  },
];

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] =
    useState<number | null>(null);

  const nextProject = () => {
    if (selectedProject === null) return;

    setSelectedProject(
      selectedProject === projects.length - 1
        ? 0
        : selectedProject + 1
    );
  };

  const previousProject = () => {
    if (selectedProject === null) return;

    setSelectedProject(
      selectedProject === 0
        ? projects.length - 1
        : selectedProject - 1
    );
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-[#06162D] via-[#0B356E] to-[#081221] text-white"
    >

      {/* Background Glow */}

      <div className="absolute -top-40 -left-24 w-[28rem] h-[28rem] rounded-full bg-blue-500/10 blur-[170px]" />

      <div className="absolute -bottom-40 right-0 w-[34rem] h-[34rem] rounded-full bg-cyan-400/10 blur-[190px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-20"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-blue-300 mb-5">
            Featured Projects
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-8">
            A selection of some of our completed construction
            projects demonstrating quality workmanship,
            innovation and attention to detail.
          </p>

        </motion.div>

        {/* Projects */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .08,
              }}
              whileHover={{
                y: -12,
              }}
              className="group overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-white/5 to-blue-900/20 backdrop-blur-xl shadow-xl hover:border-blue-400 hover:shadow-blue-500/20 transition-all duration-500"
            >

              {/* Image */}

              <div className="relative h-72 overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition duration-500" />

              </div>

              {/* Content */}

              <div className="p-7">

                <div className="flex items-center gap-2 text-blue-300 mb-4">

                  <MapPin
                    size={18}
                    className="transition-all duration-300 group-hover:text-yellow-300 group-hover:scale-110"
                  />

                  <span className="text-sm">

                    {project.location}

                  </span>

                </div>

                <h3 className="text-2xl font-bold mb-4 transition-colors duration-300 group-hover:text-blue-300">

                  {project.title}

                </h3>

                <p className="text-gray-300 leading-8 mb-8">

                  {project.description}

                </p>

                <button
                  onClick={() =>
                    setSelectedProject(index)
                  }
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 font-semibold shadow-lg transition-all duration-300 hover:from-blue-500 hover:to-blue-700 hover:shadow-blue-500/40"
                >

                  View Project

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />

                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
            {/* ===================== MODAL ===================== */}

      <AnimatePresence>

        {selectedProject !== null && (

          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.div
              initial={{
                scale: .9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: .9,
                opacity: 0,
              }}
              transition={{
                duration: .35,
              }}
              className="relative w-full max-w-6xl overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-[#081221] via-[#0A2F63] to-[#06162D] shadow-2xl"
            >

              {/* Close Button */}

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 z-30 rounded-full bg-white/10 p-3 backdrop-blur-md transition-all duration-300 hover:bg-red-600 hover:rotate-90"
              >

                <X className="w-6 h-6" />

              </button>

              {/* Previous */}

              <button
                onClick={previousProject}
                className="absolute left-5 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/50 p-4 backdrop-blur-md transition-all duration-300 hover:bg-blue-600 hover:scale-110"
              >

                <ChevronLeft className="w-7 h-7" />

              </button>

              {/* Next */}

              <button
                onClick={nextProject}
                className="absolute right-5 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/50 p-4 backdrop-blur-md transition-all duration-300 hover:bg-blue-600 hover:scale-110"
              >

                <ChevronRight className="w-7 h-7" />

              </button>

              {/* Image */}

              <div className="relative h-[70vh] bg-black overflow-hidden">

                <img
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  className="w-full h-full object-contain"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/90 via-transparent to-transparent" />

              </div>

              {/* Details */}

              <div className="p-10">

                <div className="flex items-center gap-2 text-blue-300 mb-5">

                  <MapPin className="w-5 h-5" />

                  <span>

                    {projects[selectedProject].location}

                  </span>

                </div>

                <h2 className="text-4xl font-bold mb-5">

                  {projects[selectedProject].title}

                </h2>

                <p className="text-gray-300 leading-8 text-lg">

                  {projects[selectedProject].description}

                </p>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}
