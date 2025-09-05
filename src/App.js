import React from "react"; 
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
import CodingProfiles from "./components/CodingProfiles";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certificates />
      <Education />
      <CodingProfiles />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
