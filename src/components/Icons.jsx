import React from "react";

// Official GitHub Logo Icon
export const GithubIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

// Official LinkedIn Logo Icon
export const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
  </svg>
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

// Official GeeksforGeeks Icon
export const GfgIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2zm6 8h-2v-4c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v-6h2v1.1c.42-.68 1.18-1.1 2-1.1 1.38 0 2.5 1.12 2.5 2.5V17z" />
  </svg>
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
