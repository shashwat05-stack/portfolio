import { useEffect, useState } from "react";
import {
  HomeIcon,
  UserIcon,
  WrenchIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  GithubIcon,
  GfgIcon,
  MailIcon,
  DownloadIcon,
} from "./Icons";

const sections = ["home", "about", "skills", "projects", "education", "contact"];

const SocialSidebar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

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

  const navItems = [
    {
      id: "home",
      name: "Home",
      icon: HomeIcon,
      href: "#home",
      class: "sidebar-link-home",
      external: false,
    },
    {
      id: "about",
      name: "About",
      icon: UserIcon,
      href: "#about",
      class: "sidebar-link-about",
      external: false,
    },
    {
      id: "skills",
      name: "Skills",
      icon: WrenchIcon,
      href: "#skills",
      class: "sidebar-link-skills",
      external: false,
    },
    {
      id: "projects",
      name: "Projects",
      icon: BriefcaseIcon,
      href: "#projects",
      class: "sidebar-link-projects",
      external: false,
    },
    {
      id: "education",
      name: "Education",
      icon: GraduationCapIcon,
      href: "#education",
      class: "sidebar-link-education",
      external: false,
    },
    {
      id: "github",
      name: "GitHub",
      icon: GithubIcon,
      href: "https://github.com/shashwat05-stack",
      class: "sidebar-link-github",
      external: true,
    },
    {
      id: "gfg",
      name: "GeeksforGeeks",
      icon: GfgIcon,
      href: "https://www.geeksforgeeks.org/profile/shashwatg7cp5",
      class: "sidebar-link-gfg",
      external: true,
    },
    {
      id: "contact",
      name: "Contact",
      icon: MailIcon,
      href: "#contact",
      class: "sidebar-link-contact",
      external: false,
    },
    {
      id: "resume",
      name: "Resume",
      icon: DownloadIcon,
      href: "/Shashwat-Gupta-Resume.pdf",
      download: "Shashwat-Gupta-Resume.pdf",
      class: "sidebar-link-resume",
      external: true,
    },
  ];

  return (
    <aside className="social-sidebar" aria-label="Quick navigation sidebar">
      <div className="social-sidebar-inner">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <a
              key={item.id}
              href={item.href}
              download={item.download}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={`sidebar-icon-btn ${item.class} ${isActive ? "active" : ""}`}
              aria-label={item.name}
            >
              <Icon size={18} />
              <span className="sidebar-tooltip">{item.name}</span>
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default SocialSidebar;
