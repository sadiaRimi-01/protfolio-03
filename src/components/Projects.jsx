import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/Projects";

export default function Projects() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section
      id="projects"
      className="relative py-24 bg-gradient-to-br from-white via-purple-50 to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold">
            My{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Some of my best work demonstrating frontend skills, problem-solving,
            and real-world application development.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const isActive = activeId === project.id;

            return (
              <motion.div
                key={project.id}
                layout
                className={`relative rounded-2xl overflow-hidden shadow-xl transition-all
                  ${isActive ? "lg:col-span-3" : ""}`}
              >
                {/* Card */}
                <div className="bg-white h-full">
                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-56 object-cover"
                  />

                  {/* Basic Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-purple-700">
                      {project.name}
                    </h3>

                    <p className="mt-3 text-gray-600">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-sm font-medium
                                     bg-gradient-to-r from-purple-200 to-indigo-200
                                     text-purple-900"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Button */}
                    <button
                      onClick={() =>
                        setActiveId(isActive ? null : project.id)
                      }
                      className="mt-6 inline-block text-purple-600 font-semibold hover:underline"
                    >
                      {isActive ? "Close Details ↑" : "Details →"}
                    </button>
                  </div>

                  {/* Expanded Section */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5 }}
                        className="border-t bg-gradient-to-br from-purple-50 to-indigo-50"
                      >
                        <div className="p-6 grid md:grid-cols-2 gap-6">
                          
                          {/* Left */}
                          <div>
                            <h4 className="font-semibold text-lg text-purple-700 mb-2">
                              Challenges Faced
                            </h4>
                            <p className="text-gray-700">
                              {project.challenges}
                            </p>

                            <h4 className="font-semibold text-lg text-indigo-700 mt-6 mb-2">
                              Future Improvements
                            </h4>
                            <p className="text-gray-700">
                              {project.future}
                            </p>
                          </div>

                          {/* Right (Sticky Style) */}
                          <div className="md:sticky md:top-24 self-start">
                            <div className="bg-white rounded-xl p-5 shadow-md">
                              <h4 className="font-semibold text-lg mb-3">
                                Project Links
                              </h4>

                              <div className="flex flex-col gap-3">
                                <a
                                  href={project.live}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="btn bg-purple-600 hover:bg-purple-700 border-none text-white"
                                >
                                  Live Project
                                </a>

                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="btn btn-outline border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                                >
                                  GitHub (Client)
                                </a>
                              </div>
                            </div>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
