import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useScrollReveal from "./hooks/useScrollReveal";

function App() {
  useScrollReveal();

  return (
    <>
      <div className="background-effects">
        <span className="bg-orb orb-blue"></span>
        <span className="bg-orb orb-purple"></span>
        <span className="bg-orb orb-cyan"></span>
        <span className="bg-orb orb-pink"></span>
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
