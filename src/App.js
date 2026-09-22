import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
