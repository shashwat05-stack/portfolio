const Resume = () => {
  return (
    <section className="resume-section">
      <div className="resume-box">
        <div>
          <p className="small-label">MY RESUME</p>

          <h2>Want to know more?</h2>

          <p>
            Explore my resume for a detailed overview of my skills,
            projects, technologies and development journey.
          </p>
        </div>

        <div className="resume-buttons">
          <a
            href="/Shashwat-Gupta-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn primary primary-btn"
          >
            View Resume ↗
          </a>

          <a
            href="/Shashwat-Gupta-Resume.pdf"
            download="Shashwat-Gupta-Resume.pdf"
            className="resume-btn secondary outline-btn"
          >
            Download ↓
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
