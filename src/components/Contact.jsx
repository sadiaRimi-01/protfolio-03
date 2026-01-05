import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-white overflow-hidden"
    >
      {/* Background Decorative Blurs */}
      <div className="absolute top-16 right-[-100px] w-72 h-72 bg-purple-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-16 left-[-100px] w-72 h-72 bg-indigo-300/30 rounded-full blur-3xl"></div>

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
            Get in{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            I’m always open to discussing new projects or opportunities. Reach
            out to me through the contact information below.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Email Card */}
          <div className="backdrop-blur-lg bg-white/70 border border-purple-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">
              📧 Email
            </h3>
            <p className="text-gray-700 mb-2">sadiaakter8138@gmail.com</p>
            <a
              href="mailto:sadiaakter8138@gmail.com"
              className="btn bg-purple-600 hover:bg-purple-700 text-white border-none mt-2"
            >
              Send Email
            </a>
          </div>

          {/* Phone Card */}
          <div className="backdrop-blur-lg bg-white/70 border border-indigo-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
              📞 Phone
            </h3>
            <p className="text-gray-700 mb-2">+880 1850409837</p>
            <a
              href="tel:+8801XXXXXXXXX"
              className="btn bg-indigo-600 hover:bg-indigo-700 text-white border-none mt-2"
            >
              Call Now
            </a>
          </div>
        </motion.div>

        {/* Optional Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="backdrop-blur-lg bg-white/70 border border-purple-100 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-purple-700 mb-6">
              Or Send a Message
            </h3>
            <form className="grid gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full bg-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full bg-white"
              />
              <textarea
                placeholder="Your Message"
                className="textarea textarea-bordered w-full bg-white"
                rows={5}
              ></textarea>
              <button
                type="submit"
                className="btn bg-purple-600 hover:bg-purple-700 text-white border-none mt-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
