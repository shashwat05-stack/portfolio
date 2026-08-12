import weatherImg from "../assets/weather.png";
import movieImg from "../assets/movies.png";
import spendwiseImg from "../assets/spendwise.png";
import {
  ExternalLinkIcon,
  GithubIcon,
  SparklesIcon,
  ArrowRightIcon,
} from "./Icons";

const projects = [
  {
    number: "01",
    title: "Weather App",
    subtitle: "Real-time Weather Application",
    description:
      "A responsive weather application that provides real-time weather information based on user-selected cities. It displays temperature, conditions, humidity, wind speed and other live weather data.",
    image: weatherImg,
    technologies: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Weather API",
    ],
    github: "https://github.com/shashwat05-stack/Weather-App",
    live: "https://shashwatstack-weather-app.netlify.app/",
  },

  {
    number: "02",
    title: "MovieSphere",
    subtitle: "Movie Discovery Platform",
    description:
      "A movie discovery web application for searching and exploring movies using the TMDB API. Users can discover movie posters, ratings, release information and detailed movie data.",
    image: movieImg,
    technologies: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "TMDB API",
    ],
    github: "https://github.com/shashwat05-stack/Movie-Finder",
    live: "https://shashwatstack-moviesphere.netlify.app/",
  },

  {
    number: "03",
    title: "SpendWise",
    subtitle: "Personal Expense Tracker",
    description:
      "A full-stack personal expense tracking application for managing income, expenses, budgets and financial activity with authentication, analytics and persistent cloud storage.",
    image: spendwiseImg,
    technologies: [
      "React.js",
      "JavaScript",
      "Supabase",
      "PostgreSQL",
      "CSS",
    ],
    github:
      "https://github.com/shashwat05-stack/personal-expense-tracker",
    live: "https://spendwise-personalexpensetracker.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading center-heading reveal">
        <p className="gradient-label">SELECTED WORK</p>
        <h2>Featured Projects</h2>
        <span>
          A collection of applications I've designed and developed.
        </span>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <article
            className={`project-row project-${index + 1} reveal ${
              index % 2 !== 0 ? "project-reverse" : ""
            }`}
            key={project.title}
          >
            <div className="project-image project-glass">
              <div className="browser-bar">
                <div>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <p>{project.title}</p>
              </div>

              <img src={project.image} alt={`${project.title} screenshot`} />

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="image-live-btn"
              >
                View Live <ExternalLinkIcon size={14} />
              </a>
            </div>

            <div className="project-info">
              <div className="project-header-meta">
                <span className="project-number">{project.number}</span>
                <span className="featured-badge">
                  <SparklesIcon size={12} /> Featured Project
                </span>
              </div>

              <h3>{project.title}</h3>

              <h4>{project.subtitle}</h4>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-btn project-live-demo-btn"
                >
                  Live Demo <ExternalLinkIcon size={16} />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="outline-btn project-github-btn"
                >
                  <GithubIcon size={16} /> GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="github-more reveal">
        <p>Want to see more of my work?</p>

        <a
          href="https://github.com/shashwat05-stack"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          Explore my GitHub <ArrowRightIcon size={16} />
        </a>
      </div>
    </section>
  );
};

export default Projects;
