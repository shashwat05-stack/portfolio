import {
  UserIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  LeetCodeIcon,
  GfgIcon,
  MailIcon,
} from "./Icons";

const SocialSidebar = () => {
  const links = [
    {
      name: "Profile",
      icon: UserIcon,
      href: "#about",
      class: "sidebar-link-profile",
      external: false,
    },
    {
      name: "Resume",
      icon: DownloadIcon,
      href: "/Shashwat-Gupta-Resume.pdf",
      download: "Shashwat-Gupta-Resume.pdf",
      class: "sidebar-link-resume",
      external: true,
    },
    {
      name: "GitHub",
      icon: GithubIcon,
      href: "https://github.com/shashwat05-stack",
      class: "sidebar-link-github",
      external: true,
    },
    {
      name: "LinkedIn",
      icon: LinkedinIcon,
      href: "https://www.linkedin.com/in/shashwat-g-9438a0247/",
      class: "sidebar-link-linkedin",
      external: true,
    },
    {
      name: "LeetCode",
      icon: LeetCodeIcon,
      href: "https://leetcode.com/u/p2lSQfqYKV/",
      class: "sidebar-link-leetcode",
      external: true,
    },
    {
      name: "GeeksforGeeks",
      icon: GfgIcon,
      href: "https://www.geeksforgeeks.org/profile/shashwatg7cp5",
      class: "sidebar-link-gfg",
      external: true,
    },
    {
      name: "Email",
      icon: MailIcon,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=shashwatgupta205%40gmail.com",
      class: "sidebar-link-email",
      external: true,
    },
  ];

  return (
    <aside className="social-sidebar" aria-label="Floating quick links sidebar">
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
