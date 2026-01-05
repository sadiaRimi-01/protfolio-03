import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-white via-purple-50 to-indigo-50"
    >
      {/* Decorative Background Blur */}
      <div className="absolute top-20 right-[-100px] w-72 h-72 bg-purple-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-[-100px] w-72 h-72 bg-indigo-300/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            I’m <span className="font-semibold">Sadia Akter Rimy</span>, a
            passionate frontend developer currently pursuing my graduation.
            My journey into programming started with simple HTML and CSS,
            and gradually evolved into building modern, responsive, and
            interactive user experiences.
            <br /><br />
            I enjoy transforming ideas into clean UI using{" "}
            <span className="font-semibold text-purple-600">
              React, Tailwind CSS, and JavaScript
            </span>
            . Beyond coding, I love creative design, exploring new
            technologies, and constantly improving my problem-solving skills.
          </p>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-6"
        >
          <div className="backdrop-blur-lg bg-white/70 border border-purple-100 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              My Journey
            </h3>
            <p className="text-gray-600">
              Started with HTML & CSS, now building complete React-based
              applications with clean UI and smooth UX.
            </p>
          </div>

          <div className="backdrop-blur-lg bg-white/70 border border-indigo-100 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">
              What I Love
            </h3>
            <p className="text-gray-600">
              Creating responsive layouts, UI animations, and modern web
              experiences that users enjoy.
            </p>
          </div>

          <div className="backdrop-blur-lg bg-white/70 border border-pink-100 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-pink-600 mb-2">
              Outside Coding
            </h3>
            <p className="text-gray-600">
              Creative design, learning new tools, and improving both technical
              and soft skills.
            </p>
          </div>

          <div className="backdrop-blur-lg bg-white/70 border border-purple-100 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              My Goal
            </h3>
            <p className="text-gray-600">
              To grow as a professional frontend developer and build impactful,
              user-centered digital products.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
