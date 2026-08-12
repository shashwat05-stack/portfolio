import { useEffect, useState } from "react";

const sections = [
  "home",
  "about",
  "skills",
  "projects",
  "education",
  "contact",
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);

        if (!section) continue;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        <span>SG</span>.
      </a>

      <div className="nav-links">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={activeSection === section ? "active" : ""}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=shashwatgupta205%40gmail.com"
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
