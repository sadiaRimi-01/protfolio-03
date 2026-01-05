import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navber";
import Education from "./components/Education";


export default function App() {
  return (
    <>
     
      <Navbar />

    
      <Hero />

      
      <About />

     
      <Skills />

     
      <Education />

     
      <Projects />

    
      <Contact />

    
      <Footer />
    </>
  );
}