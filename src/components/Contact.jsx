const Contact = () => {
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-top">
        <p>GET IN TOUCH</p>

        <h2>
          Let's build something
          <span> awesome.</span>
        </h2>

        <p className="contact-description">
          Have an opportunity, project idea or just want to connect?
          Feel free to reach out.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-left">
          <p className="small-label">CONTACT INFORMATION</p>

          <h3>Let's Connect.</h3>

          <p>
            I'm open to discussing development opportunities,
            collaborations and interesting projects.
          </p>

          <div className="contact-items">
            <a href="mailto:shashwatgupta205@gmail.com?subject=Portfolio%20Contact" className="contact-link">
              <span>✉</span>

              <div>
                <small className="contact-label">EMAIL</small>
                <p>shashwatgupta205@gmail.com</p>
              </div>
            </a>

            <a
              href="https://github.com/shashwat05-stack"
              target="_blank"
              rel="noreferrer"
            >
              <span>{"</>"}</span>

              <div>
                <small>GITHUB</small>
                <p>shashwat05-stack</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/shashwat-g-9438a0247/"
              target="_blank"
              rel="noreferrer"
            >
              <span>in</span>

              <div>
                <small>LINKEDIN</small>
                <p>Shashwat Gupta</p>
              </div>
            </a>
          </div>

          <div className="coding-profiles">
            <p className="profile-label">CODING PROFILES & SOCIALS</p>

            <div className="social-links">
              <a
                href="https://github.com/shashwat05-stack"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/shashwat-g-9438a0247/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://leetcode.com/u/p2lSQfqYKV/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                LeetCode ↗
              </a>

              <a
                href="https://www.geeksforgeeks.org/profile/shashwatg7cp5"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                GeeksforGeeks ↗
              </a>
            </div>
          </div>
        </div>

        <div className="contact-card">
          <p>Have something in mind?</p>

          <h3>Start a conversation.</h3>

          <p>
            Send me an email and I'll get back to you.
          </p>

          <a
            href="mailto:shashwatgupta205@gmail.com?subject=Portfolio%20Contact"
            className="primary-btn contact-email-btn"
          >
            Send an Email ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
