import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "projects", "education", "contact"];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        <span>SG</span>.
      </a>

      <div className="nav-links">
        <a href="#home" className={activeSection === "home" ? "active" : ""}>
          Home
        </a>
        <a href="#about" className={activeSection === "about" ? "active" : ""}>
          About
        </a>
        <a href="#skills" className={activeSection === "skills" ? "active" : ""}>
          Skills
        </a>
        <a href="#projects" className={activeSection === "projects" ? "active" : ""}>
          Projects
        </a>
        <a href="#education" className={activeSection === "education" ? "active" : ""}>
          Education
        </a>
        <a href="#contact" className={activeSection === "contact" ? "active" : ""}>
          Contact
        </a>
      </div>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=shashwatgupta205@gmail.com&su=Portfolio%20Contact"
        target="_blank"
        rel="noopener noreferrer"
        className="outline-btn nav-btn"
      >
        Let's Talk
      </a>
    </nav>
  );
};

export default Navbar;

