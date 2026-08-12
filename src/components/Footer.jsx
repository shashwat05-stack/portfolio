const Footer = () => {
  return (
    <footer>
      <a href="#home" className="logo">
        <span>SG</span>.
      </a>

      <p>
        Designed & built by <strong>Shashwat Gupta</strong>
      </p>

      <div className="footer-links">
        <a
          href="https://github.com/shashwat05-stack"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/shashwat-g-9438a0247/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a href="#home">↑ Back to top</a>
      </div>
    </footer>
  );
};

export default Footer;
