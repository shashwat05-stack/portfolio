import React from "react";
import { SiGeeksforgeeks, SiGithub, SiLeetcode } from "react-icons/si";
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
  <SiLeetcode size={size} className={className} />
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
