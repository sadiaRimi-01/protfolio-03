import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./pages/ProjectsDetails";
import Navbar from "./components/Navber";
import Education from "./components/Education";


const Home = () => (
  <>
  <Navbar></Navbar>
    <Hero />
    <About />
    <Skills />
    <Education></Education>
    <Projects />
    <Contact />
    <Footer />
  </>
);

export default function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </>
  );
}
