import {
  SiGithub,
  SiGeeksforgeeks,
} from "react-icons/si";
import {
  MailIcon,
  DownloadIcon,
  CodeIcon,
} from "./Icons";

const SocialSidebar = () => {
  const links = [
    {
      name: "GitHub",
      icon: SiGithub,
      href: "https://github.com/shashwat05-stack",
      class: "sidebar-link-github",
      external: true,
    },
    {
      name: "GeeksforGeeks",
      icon: SiGeeksforgeeks,
      href: "https://www.geeksforgeeks.org/profile/shashwatg7cp5",
      class: "sidebar-link-gfg",
      external: true,
    },
    {
      name: "LeetCode",
      icon: CodeIcon,
      href: "https://leetcode.com/u/p2lSQfqYKV/",
      class: "sidebar-link-leetcode",
      external: true,
    },
    {
      name: "Email",
      icon: MailIcon,
      href: "mailto:shashwatgupta205@gmail.com",
      class: "sidebar-link-email",
      external: true,
    },
    {
      name: "Resume",
      icon: DownloadIcon,
      href: "/Shashwat-Gupta-Resume.pdf",
      download: "Shashwat-Gupta-Resume.pdf",
      class: "sidebar-link-resume",
      external: true,
    },
  ];

  return (
    <aside className="social-sidebar" aria-label="Social links sidebar">
      <div className="social-sidebar-inner">
        {links.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              download={item.download}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={`sidebar-icon-btn ${item.class}`}
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
