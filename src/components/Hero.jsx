import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-800 text-white"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-pink-400/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-indigo-400/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-pink-300 to-white bg-clip-text text-transparent">
              Sadia Akter Rimy
            </span>
          </h1>

          <p className="mt-4 text-xl md:text-2xl font-medium text-pink-200">
            Frontend Developer
          </p>

          <p className="mt-6 text-gray-200 max-w-lg leading-relaxed">
            I specialize in building modern, responsive, and user-friendly web
            applications using React, Tailwind CSS, and modern JavaScript
            technologies.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#"
              className="btn bg-pink-400 hover:bg-pink-500 border-none text-black font-semibold rounded-full px-8"
            >
              Download Resume
            </a>

            <a
              href="mailto:sadiaakter8138@gmail.com"
              className="btn btn-outline text-white border-white hover:bg-white hover:text-purple-800 rounded-full px-8"
            >
              Hire Me
            </a>
          </div>

         
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-400 to-indigo-400 blur-xl opacity-70"></div>
            <img
              src="https://i.ibb.co.com/TDSkBqs9/Gemini-Generated-Image-1q0t5y1q0t5y1q0t.png"
              alt="Sadia Akter Rimy"
              className="relative w-72 md:w-80 rounded-full border-4 border-white shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
