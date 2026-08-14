import { useEffect, useState } from "react";
import { MenuIcon, CloseIcon } from "./Icons";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        <span>SG</span>.
      </a>

      {/* Desktop Navigation Links */}
      <div className="nav-links desktop-only">
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

      <div className="nav-actions">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=shashwatgupta205%40gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="outline-btn nav-btn"
        >
          Let's Talk
        </a>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="hamburger-btn mobile-only"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu}>
          <div
            className="mobile-menu-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-menu-links">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={activeSection === section ? "active" : ""}
                  onClick={closeMenu}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>
            <div className="mobile-menu-footer">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=shashwatgupta205%40gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn full-width"
                onClick={closeMenu}
              >
                Send Direct Email
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
