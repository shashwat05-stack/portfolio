const skillGroups = [
  {
    number: "01",
    title: "Programming",
    icon: "⌘",
    color: "orange",
    skills: [
      ["Java", "java"],
      ["JavaScript", "javascript"],
      ["Python", "python"],
      ["SQL", "sql"],
    ],
  },
  {
    number: "02",
    title: "Frontend",
    icon: "◈",
    color: "cyan",
    skills: [
      ["HTML", "html"],
      ["CSS", "css"],
      ["React.js", "react"],
      ["Vite", "vite"],
    ],
  },
  {
    number: "03",
    title: "Backend",
    icon: "⌁",
    color: "green",
    skills: [
      ["Node.js", "node"],
      ["Express.js", "express"],
      ["REST APIs", "api"],
    ],
  },
  {
    number: "04",
    title: "Databases",
    icon: "◉",
    color: "blue",
    skills: [
      ["MongoDB", "mongodb"],
      ["PostgreSQL", "postgres"],
      ["MySQL", "mysql"],
      ["Supabase", "supabase"],
    ],
  },
  {
    number: "05",
    title: "Tools & Deployment",
    icon: "⚡",
    color: "purple",
    skills: [
      ["Git", "git"],
      ["GitHub", "github"],
      ["Vercel", "vercel"],
      ["Netlify", "netlify"],
    ],
  },
  {
    number: "06",
    title: "AI & Other",
    icon: "✦",
    color: "pink",
    skills: [
      ["OpenAI APIs", "ai"],
      ["LLM Prompting", "llm"],
      ["TensorFlow", "tensorflow"],
      ["CI/CD", "cicd"],
    ],
  },
];

const Skills = () => {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-heading center-heading reveal">
        <p>MY TOOLKIT</p>

        <h2>Skills & Technologies</h2>

        <span>
          Technologies I'm working with and continuously improving.
        </span>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <div
            className={`skill-card skill-${group.color} reveal`}
            style={{ "--delay": `${index * 80}ms` }}
            key={group.title}
          >
            <div className="skill-top">
              <div className="skill-icon">{group.icon}</div>

              <span className="skill-number">{group.number}</span>
            </div>

            <h3>{group.title}</h3>

            <div className="skill-tags">
              {group.skills.map(([skill, type], index) => (
                <span
                  className="skill-tag"
                  style={{ "--tag-delay": `${index * 80}ms` }}
                  key={skill}
                >
                  <span className={`mini-icon ${type}`}></span>
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
