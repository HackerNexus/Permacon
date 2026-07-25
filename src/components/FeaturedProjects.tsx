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
    description:
      "Tiling, Gypsum  and paint works.",
  },
  {
    title: "Residential Construction",
    location: "Nakuru, Kenya",
    image: "/images/9.jpeg",
    description:
      "Custom new building in process.",
  },
  {
    title: "Proposed Design",
    location: "Kiambu, Kenya",
    image: "/images/3.jpg",
    description:
      "Proposed Residential Development.",
  },
  {
    title: "School/institutional Development",
    location: "Nakuru County, Kenya",
    image: "/images/4.jpg",
    description:
      "Classroom construction.",
  },
  {
    title: "Custom new build ",
    location: "Nakuru County, Kenya",
    image: "/images/5.jpg",
    description:
      "Residential Development",
  },
  {
    title: "Residential Development",
    location: "Nakuru, Kenya",
    image: "/images/10.jpeg",
    description:
      "Structural works.",
  },
  {
    title: "Commercial Development",
    location: "Nakuru, Kenya",
    image: "/images/11.jpeg",
    description:
      "Paint and Granite works.",
  },
  {
    title: "Nakuru-Naivasha District Hospital",
    location: "Nakuru, Kenya",
    image: "/images/12.jpeg",
    description:
      "Door and Frames fitting.",
  },
  {
    title: "Residential Development",
    location: "Nakuru, Kenya",
    image: "/images/13.jpeg",
    description:
      "Custom new building upon completion.",
  },
  {
    title: "Residential Development",
    location: "Kiambu-Membley , Kenya",
    image: "/images/14.png",
    description:
      "Renovation Works.",
  },
  
];

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

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
      className="py-24 bg-[#081221] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
            Featured Projects
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            A selection of some of our completed construction projects,
            demonstrating quality workmanship, innovation and attention to
            detail.
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
                delay: index * .1,
              }}
              whileHover={{
                y: -8,
              }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 hover:border-blue-500 transition-all"
            >

              {/* Image */}

              <div className="relative h-72 overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-700 hover:scale-110"
                />

              </div>

              {/* Content */}

              <div className="p-7">

                <div className="flex items-center gap-2 text-blue-400 mb-4">

                  <MapPin size={18} />

                  <span className="text-sm">

                    {project.location}

                  </span>

                </div>

                <h3 className="text-2xl font-bold mb-4">

                  {project.title}

                </h3>

                <p className="text-gray-400 leading-8 mb-8">

                  {project.description}

                </p>

                <button
                  onClick={() => setSelectedProject(index)}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition"
                >
                  View Project

                  <ArrowUpRight size={18} />

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
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.div
              initial={{ scale: .9 }}
              animate={{ scale: 1 }}
              exit={{ scale: .9 }}
              className="relative bg-[#081221] rounded-3xl overflow-hidden max-w-5xl w-full"
            >

              {/* Close */}

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 z-20 bg-white/10 p-3 rounded-full hover:bg-red-600 transition"
              >

                <X />

              </button>

              {/* Previous */}

              <button
                onClick={previousProject}
                className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/60 p-3 rounded-full hover:bg-blue-600 transition"
              >

                <ChevronLeft />

              </button>

              {/* Next */}

              <button
                onClick={nextProject}
                className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/60 p-3 rounded-full hover:bg-blue-600 transition"
              >

                <ChevronRight />

              </button>

              {/* Image */}

              <div className="h-[65vh] bg-black">

                <img
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  className="w-full h-full object-contain"
                />

              </div>

              {/* Content */}

              <div className="p-10">

                <div className="flex items-center gap-2 text-blue-400 mb-4">

                  <MapPin size={18} />

                  {projects[selectedProject].location}

                </div>

                <h2 className="text-3xl font-bold mb-5">

                  {projects[selectedProject].title}

                </h2>

                <p className="text-gray-400 leading-8">

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