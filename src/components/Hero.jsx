import {
  GithubIcon,
  LinkedinIcon,
  LeetCodeIcon,
  GfgIcon,
  FileTextIcon,
  ArrowUpRightIcon,
} from "./Icons";

const Hero = () => {
  return (
    <section className="hero section reveal" id="home">
      <div className="hero-content">
        <p className="hero-hello">Hello, I'm</p>

        <h1 className="hero-name">
          Shashwat <span className="gradient-text">Gupta</span>
        </h1>

        <h2>
          Web Developer <span>•</span> Java Programmer <span>•</span>{" "}
          Problem Solver
        </h2>

        <p className="hero-description">
          I build modern web applications and I'm currently strengthening my
          problem-solving skills through Java and Data Structures & Algorithms.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            Explore Projects <ArrowUpRightIcon size={18} />
          </a>

          <a
            href="/Shashwat-Gupta-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="outline-btn"
          >
            <FileTextIcon size={18} /> View Resume
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/shashwat05-stack"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn github-btn"
            aria-label="GitHub"
            title="GitHub"
          >
            <GithubIcon size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/shashwat-g-9438a0247/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn linkedin-btn"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>

          <a
            href="https://leetcode.com/u/p2lSQfqYKV/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn leetcode-btn"
            aria-label="LeetCode"
            title="LeetCode"
          >
            <LeetCodeIcon size={20} />
          </a>

          <a
            href="https://www.geeksforgeeks.org/profile/shashwatg7cp5"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn gfg-btn"
            aria-label="GeeksforGeeks"
            title="GeeksforGeeks"
          >
            <GfgIcon size={20} />
          </a>
        </div>
      </div>

      <div className="code-window">
        <div className="code-header">
          <div className="window-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <p>developer.js</p>
        </div>

        <div className="code-content">
          <p>
            <span className="purple">const</span>{" "}
            <span className="blue">developer</span> = {"{"}
          </p>

          <p className="indent">
            name: <span className="green">"Shashwat Gupta"</span>,
          </p>

          <p className="indent">
            role: <span className="green">"Web Developer"</span>,
          </p>

          <p className="indent">
            language: <span className="green">"Java"</span>,
          </p>

          <p className="indent">
            focus: <span className="green">"DSA + Web"</span>,
          </p>

          <p className="indent">
            building: <span className="orange">true</span>,
          </p>

          <p className="indent">
            learning: <span className="orange">true</span>
          </p>

          <p>{"};"}</p>

          <br />

          <p>
            <span className="purple">while</span> (learning) {"{"}
          </p>

          <p className="indent">
            <span className="blue">developer</span>.improve();
          </p>

          <p>{"}"}</p>

          <div className="terminal-line">
            <span>➜</span>
            <span> building something awesome...</span>
            <span className="cursor"></span>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-indicator">
        <span>⌄</span> SCROLL TO EXPLORE
      </a>
    </section>
  );
};

export default Hero;
