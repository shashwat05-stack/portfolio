const skillGroups = [
  {
    number: "01",
    title: "Programming",
    skills: ["Java", "JavaScript", "Python", "SQL"],
  },
  {
    number: "02",
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    number: "03",
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    number: "04",
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Supabase"],
  },
  {
    number: "05",
    title: "Tools & Deployment",
    skills: ["Git", "GitHub", "Vercel", "Netlify", "AWS"],
  },
  {
    number: "06",
    title: "AI & Other",
    skills: [
      "OpenAI APIs",
      "LLM Prompt Engineering",
      "TensorFlow",
      "CI/CD",
    ],
  },
];

const getSkillClass = (skillName) => {
  const normalized = skillName.toLowerCase();
  if (normalized.includes("java") && !normalized.includes("script")) return "tag-java";
  if (normalized.includes("javascript") || normalized.includes("js")) return "tag-javascript";
  if (normalized.includes("react")) return "tag-react";
  if (normalized.includes("python")) return "tag-python";
  if (normalized.includes("node")) return "tag-node";
  if (normalized.includes("mongo")) return "tag-mongodb";
  if (normalized.includes("aws")) return "tag-aws";
  if (normalized.includes("github")) return "tag-github";
  if (normalized.includes("sql") || normalized.includes("postgres")) return "tag-sql";
  if (normalized.includes("html") || normalized.includes("css")) return "tag-htmlcss";
  if (normalized.includes("ai") || normalized.includes("llm") || normalized.includes("tensor")) return "tag-ai";
  return "tag-default";
};

const Skills = () => {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-heading center-heading">
        <p>MY TOOLKIT</p>
        <h2>Skills & Technologies</h2>

        <span>
          Technologies I'm working with and continuously improving.
        </span>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <div className="skill-number">{group.number}</div>

            <h3>{group.title}</h3>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill} className={`skill-tag ${getSkillClass(skill)}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
