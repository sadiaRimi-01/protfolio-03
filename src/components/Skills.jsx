import { motion } from "framer-motion";

export default function Skills() {
  const skills = {
    Frontend: ["HTML", "CSS", "Tailwind", "JavaScript", "React", "Next.js"],
    Backend: ["Node.js"],
    Tools: ["Git", "GitHub"],
  };

  return (
    <section
      id="skills"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-purple-50 via-indigo-50 to-white"
    >
      {/* Background Blur Effects */}
      <div className="absolute top-16 left-[-120px] w-80 h-80 bg-purple-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-16 right-[-120px] w-80 h-80 bg-indigo-300/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-extrabold">
            My{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Technologies and tools I use to build modern, responsive, and
            high-quality web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([title, list], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="backdrop-blur-lg bg-white/70 border border-purple-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-semibold mb-6 text-purple-700">
                {title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {list.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-medium
                               bg-gradient-to-r from-purple-200 to-indigo-200
                               text-purple-900 shadow hover:scale-105 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
