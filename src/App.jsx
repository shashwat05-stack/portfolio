import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialSidebar from "./components/SocialSidebar";
import useScrollReveal from "./hooks/useScrollReveal";

function App() {
  useScrollReveal();

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Radial Mouse Spotlight */}
      <div className="mouse-spotlight" aria-hidden="true"></div>

      {/* Floating Ambient Background Orbs */}
      <div className="background-effects" aria-hidden="true">
        <span className="bg-orb orb-forest"></span>
        <span className="bg-orb orb-gold"></span>
        <span className="bg-orb orb-emerald"></span>
        <span className="bg-orb orb-yellow"></span>
        <span className="bg-orb orb-green"></span>
        <span className="bg-orb orb-deepgreen"></span>
      </div>

      <SocialSidebar />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
