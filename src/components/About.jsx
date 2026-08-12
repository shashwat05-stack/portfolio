import {
  MonitorIcon,
  CodeIcon,
  WrenchIcon,
  BrainIcon,
  ArrowRightIcon,
} from "./Icons";

const About = () => {
  const cards = [
    {
      icon: MonitorIcon,
      colorClass: "about-icon-cyan",
      title: "Web Development",
      text: "Building responsive and modern web applications.",
    },
    {
      icon: CodeIcon,
      colorClass: "about-icon-purple",
      title: "Problem Solving",
      text: "Practicing Java, DSA and coding problems.",
    },
    {
      icon: WrenchIcon,
      colorClass: "about-icon-orange",
      title: "Building Projects",
      text: "Turning ideas into useful real-world applications.",
    },
    {
      icon: BrainIcon,
      colorClass: "about-icon-pink",
      title: "Exploring AI",
      text: "Learning AI tools, APIs and intelligent applications.",
    },
  ];

  return (
    <section className="section" id="about">
      <div className="section-heading reveal">
        <p className="gradient-label">GET TO KNOW ME</p>
        <h2>About Me</h2>
      </div>

      <div className="about-layout">
        <div className="about-text reveal">
          <h3>
            I love building things <span className="gradient-text-subtle">with code.</span>
          </h3>

          <p>
            I'm Shashwat Gupta, a Computer Science & Engineering student at
            Shri Shankaracharya Technical Campus, Bhilai.
          </p>

          <p>
            I enjoy building practical web applications, working with APIs and
            databases, and turning ideas into functional products.
          </p>

          <p>
            I'm currently strengthening my Java and Data Structures &
            Algorithms skills while exploring modern web development, backend
            technologies and AI-powered applications.
          </p>

          <div className="connect-button-wrapper">
            <a href="#contact" className="connect-button">
              Let's Connect <ArrowRightIcon size={16} />
            </a>
          </div>
        </div>

        <div className="about-cards">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div className={`info-card reveal ${card.colorClass}`} key={card.title}>
                <div className="info-icon">
                  <Icon size={22} />
                </div>

                <h4>{card.title}</h4>

                <p>{card.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
