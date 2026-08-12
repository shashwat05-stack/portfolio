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
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
