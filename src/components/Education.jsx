import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-white overflow-hidden"
    >
      {/* Background Decorative Blur */}
      <div className="absolute top-16 right-[-120px] w-80 h-80 bg-purple-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-16 left-[-120px] w-80 h-80 bg-indigo-300/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto px-6">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-extrabold">
            My{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            My academic background and current educational journey.
          </p>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-lg bg-white/70 border border-purple-100 rounded-2xl p-10 shadow-xl"
        >
          <h3 className="text-2xl font-semibold text-purple-700">
            Bachelor’s Degree (Undergraduate)
          </h3>

          <p className="mt-2 text-lg font-medium text-indigo-600">
            3rd Year (Currently Studying)
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            I am currently pursuing my undergraduate degree and studying in my
            3rd year. During my academic journey, I have developed a strong
            foundation in programming concepts, web technologies, and
            problem-solving skills. Alongside my studies, I actively practice
            frontend development and build real-world projects using modern
            tools and frameworks.
          </p>

          {/* Highlights */}
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-4 text-purple-800 font-medium">
              🎓 Undergraduate Student
            </div>
            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-4 text-indigo-800 font-medium">
              📚 3rd Year (Ongoing)
            </div>
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-4 text-purple-800 font-medium">
              💻 Focus on Frontend Development
            </div>
            <div className="bg-gradient-to-r from-pink-100 to-indigo-100 rounded-xl p-4 text-pink-800 font-medium">
              🚀 Learning Through Real Projects
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
