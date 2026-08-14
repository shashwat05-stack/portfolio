import {
  SiJavascript,
  SiPython,
  SiMysql,
  SiHtml5,
  SiReact,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiTensorflow,
} from "react-icons/si";

import { FaJava, FaCss3Alt } from "react-icons/fa6";

import {
  CodeIcon,
  MonitorIcon,
  ServerIcon,
  DatabaseIcon,
  WrenchIcon,
  BrainIcon,
  SparklesIcon,
} from "./Icons";

// Custom OpenAI Icon SVG
const OpenAiIcon = ({ size = 18, className = "", style = {} }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={style}
    aria-hidden="true"
  >
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9 6.0651 6.0651 0 0 0-4.3368-1.9168 6.001 6.001 0 0 0-5.764 4.195 6.0506 6.0506 0 0 0-4.148 2.898A5.998 5.998 0 0 0 2.222 13.067a5.9847 5.9847 0 0 0 .5157 4.9108 6.0462 6.0462 0 0 0 6.5098 2.9 6.0651 6.0651 0 0 0 4.3368 1.9168 6.001 6.001 0 0 0 5.764-4.195 6.0506 6.0506 0 0 0 4.148-2.898 5.998 5.998 0 0 0-1.2144-5.88zM12 18.5a6.5 6.5 0 1 1 6.5-6.5 6.507 6.507 0 0 1-6.5 6.5z" />
  </svg>
);

// Map each technology to its exact brand icon component and high-contrast brand color
const techIconMap = {
  Java: { icon: FaJava, color: "#ED8B00", class: "skill-java" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E", class: "skill-javascript" },
  Python: { icon: SiPython, color: "#3776AB", class: "skill-python" },
  SQL: { icon: SiMysql, color: "#4479A1", class: "skill-sql" },
  HTML: { icon: SiHtml5, color: "#E34F26", class: "skill-html" },
  CSS: { icon: FaCss3Alt, color: "#1572B6", class: "skill-css" },
  "React.js": { icon: SiReact, color: "#00D8FF", class: "skill-react" },
  Vite: { icon: SiVite, color: "#646CFF", class: "skill-vite" },
  "Node.js": { icon: SiNodedotjs, color: "#339933", class: "skill-node" },
  "Express.js": { icon: SiExpress, color: "#18221D", class: "skill-express" },
  "REST APIs": { icon: ServerIcon, color: "#06B6D4", class: "skill-api" },
  MongoDB: { icon: SiMongodb, color: "#47A248", class: "skill-mongodb" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1", class: "skill-postgres" },
  MySQL: { icon: SiMysql, color: "#4479A1", class: "skill-mysql" },
  Supabase: { icon: SiSupabase, color: "#3ECF8E", class: "skill-supabase" },
  Git: { icon: SiGit, color: "#F05032", class: "skill-git" },
  GitHub: { icon: SiGithub, color: "#18221D", class: "skill-github" },
  Vercel: { icon: SiVercel, color: "#18221D", class: "skill-vercel" },
  Netlify: { icon: SiNetlify, color: "#00C7B7", class: "skill-netlify" },
  "OpenAI APIs": { icon: OpenAiIcon, color: "#10A37F", class: "skill-openai" },
  "LLM Prompting": { icon: BrainIcon, color: "#EC4899", class: "skill-llm" },
  TensorFlow: { icon: SiTensorflow, color: "#FF6F00", class: "skill-tensorflow" },
  "CI/CD": { icon: SparklesIcon, color: "#8B5CF6", class: "skill-cicd" },
};

const skillGroups = [
  {
    number: "01",
    title: "Programming",
    icon: CodeIcon,
    color: "orange",
    skills: ["Java", "JavaScript", "Python", "SQL"],
  },
  {
    number: "02",
    title: "Frontend",
    icon: MonitorIcon,
    color: "cyan",
    skills: ["HTML", "CSS", "React.js", "Vite"],
  },
  {
    number: "03",
    title: "Backend",
    icon: ServerIcon,
    color: "green",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    number: "04",
    title: "Databases",
    icon: DatabaseIcon,
    color: "blue",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Supabase"],
  },
  {
    number: "05",
    title: "Tools & Deployment",
    icon: WrenchIcon,
    color: "purple",
    skills: ["Git", "GitHub", "Vercel", "Netlify"],
  },
  {
    number: "06",
    title: "AI & Other",
    icon: BrainIcon,
    color: "pink",
    skills: ["OpenAI APIs", "LLM Prompting", "TensorFlow", "CI/CD"],
  },
];

const Skills = () => {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-heading center-heading reveal">
        <p className="gradient-label">MY TOOLKIT</p>

        <h2>
          Skills & <span className="highlight-text">Technologies</span>
        </h2>

        <div className="subtitle-wrapper">
          <span>Technologies I'm working with and continuously improving.</span>
          <div className="heading-accent-line"></div>
        </div>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => {
          const GroupIcon = group.icon;
          return (
            <div
              className={`skill-card skill-card-${group.color} reveal`}
              style={{ "--delay": `${index * 80}ms` }}
              key={group.title}
            >
              <div className="skill-top">
                <div className={`skill-icon skill-icon-${group.color}`}>
                  <GroupIcon size={26} />
                </div>

                <span className={`skill-number skill-number-${group.color}`}>
                  {group.number}
                </span>
              </div>

              <h3 className="skill-title">{group.title}</h3>
              <div className={`skill-header-line line-${group.color}`}></div>

              <div className="skill-tags">
                {group.skills.map((skillName, idx) => {
                  const techInfo = techIconMap[skillName] || {
                    icon: CodeIcon,
                    color: "#18221D",
                    class: "skill-default",
                  };
                  const TechIcon = techInfo.icon;

                  return (
                    <div
                      className={`skill-chip ${techInfo.class}`}
                      style={{ "--tag-delay": `${idx * 80}ms` }}
                      key={skillName}
                    >
                      <TechIcon
                        className="skill-brand-icon"
                        style={{ color: techInfo.color }}
                        size={18}
                      />
                      <span>{skillName}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
