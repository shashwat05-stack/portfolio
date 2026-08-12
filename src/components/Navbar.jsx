const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        <span>SG</span>.
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </div>

      <a
        href="mailto:shashwatgupta205@gmail.com?subject=Portfolio%20Contact"
        className="outline-btn nav-btn nav-talk-btn"
      >
        Let's Talk
      </a>
    </nav>
  );
};

export default Navbar;
