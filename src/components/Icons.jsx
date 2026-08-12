import React from "react";
import { SiGeeksforgeeks, SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

// Official GitHub Logo Icon
export const GithubIcon = ({ size = 20, className = "" }) => (
  <SiGithub size={size} className={className} />
);

// Official LinkedIn Logo Icon
export const LinkedinIcon = ({ size = 20, className = "" }) => (
  <FaLinkedin size={size} className={className} />
);

// Official LeetCode Logo Icon
export const LeetCodeIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636c-1.005-1.006-2.412-1.458-3.855-1.458s-2.85.452-3.855 1.458L3.385 10.42c-1.005 1.005-1.508 2.457-1.508 3.9s.503 2.894 1.508 3.9l4.332 4.363c1.005 1.005 2.412 1.458 3.855 1.458s2.85-.452 3.855-1.458l2.697-2.607c.514-.514.496-1.365-.039-1.901-.535-.535-1.386-.553-1.9-.038zM20.811 13.01H10.666c-.733 0-1.327-.594-1.327-1.327s.594-1.327 1.327-1.327h10.145c.733 0 1.327.594 1.327 1.327s-.594 1.327-1.328 1.327z" />
  </svg>
);

// Official GeeksforGeeks Icon from react-icons
export const GfgIcon = ({ size = 20, className = "" }) => (
  <SiGeeksforgeeks size={size} className={className} />
);

// Re-export needed Lucide icons safely
export {
  Mail as MailIcon,
  Code2 as CodeIcon,
  Download as DownloadIcon,
  ExternalLink as ExternalLinkIcon,
  Send as SendIcon,
  User as UserIcon,
  Sparkles as SparklesIcon,
  Monitor as MonitorIcon,
  Server as ServerIcon,
  Database as DatabaseIcon,
  Wrench as WrenchIcon,
  Brain as BrainIcon,
  ArrowRight as ArrowRightIcon,
  ArrowUpRight as ArrowUpRightIcon,
  FileText as FileTextIcon,
} from "lucide-react";
