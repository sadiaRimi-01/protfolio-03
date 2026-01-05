import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        ["Home", "#home"],
        ["About", "#about"],
        ["Skills", "#skills"],
        ["Projects", "#projects"],
        ["Contact", "#contact"],
    ];

    return (
        <nav className="sticky top-0 z-50 shadow-md w-full">
            {/* Gradient Background */}
            <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 backdrop-blur-md shadow-lg">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

                    {/* Logo */}
                    <a
                        href="#home"
                        className="text-2xl font-extrabold bg-gradient-to-r from-pink-300 to-white bg-clip-text text-transparent tracking-wide"
                    >
                        Sadia Rimy
                    </a>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-8">
                        {links.map(([name, link]) => (
                            <li key={name} className="relative group">
                                <a
                                    href={link}
                                    className="text-white font-medium transition"
                                >
                                    {name}
                                </a>
                                {/* Hover underline */}
                                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-300 transition-all group-hover:w-full"></span>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-white text-3xl"
                    >
                        {open ? "✕" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-gradient-to-b from-purple-700 to-indigo-700 text-white px-6 py-6 space-y-4 shadow-xl"
                    >
                        {links.map(([name, link]) => (
                            <li key={name}>
                                <a
                                    href={link}
                                    onClick={() => setOpen(false)}
                                    className="block text-lg font-medium hover:text-pink-300 transition"
                                >
                                    {name}
                                </a>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </nav>
    );
}