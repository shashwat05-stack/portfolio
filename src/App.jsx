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

function App() {
  useEffect(() => {
    // Add reveal-on-scroll to key section elements and cards automatically
    const revealTargets = document.querySelectorAll(
      ".section, .skill-card, .project-row, .education-card, .resume-box, .contact-left, .contact-card"
    );

    revealTargets.forEach((el) => el.classList.add("reveal-on-scroll"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
          }
        });
      },
      { threshold: 0.15 }
    );

    revealTargets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="background-effects">
        <span className="bg-glow bg-glow-1"></span>
        <span className="bg-glow bg-glow-2"></span>
        <span className="bg-glow bg-glow-3"></span>
        <span className="bg-glow bg-glow-4"></span>
        <div className="bg-grid-pattern"></div>
      </div>

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

