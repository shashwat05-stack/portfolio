import { useState } from "react";
import {
  MailIcon,
  GithubIcon,
  LinkedinIcon,
  LeetCodeIcon,
  GfgIcon,
  SendIcon,
} from "./Icons";

// =========================================================================
// REPLACE 'YOUR_FORMSPREE_ENDPOINT' WITH YOUR ACTUAL FORMSPREE ENDPOINT URL
// Example: "https://formspree.io/f/xzy... "
// =========================================================================
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrpzkklr";

const Contact = () => {
  const [status, setStatus] = useState(null); // null | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.target;
    const data = new FormData(form);

    // Fallback handler if user has not set their Formspree endpoint yet
    if (FORMSPREE_ENDPOINT === "YOUR_FORMSPREE_ENDPOINT" || !FORMSPREE_ENDPOINT) {
      setTimeout(() => {
        setStatus("success");
        form.reset();
      }, 500);
      return;
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        const result = await response.json();
        if (result && result.errors && result.errors.length > 0) {
          setErrorMessage(result.errors.map((err) => err.message).join(", "));
        } else {
          setErrorMessage("Something went wrong. Please try again or email me directly.");
        }
        setStatus("error");
      }
    } catch (err) {
      setErrorMessage("Something went wrong. Please try again or email me directly.");
      setStatus("error");
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="section-heading center-heading reveal">
        <p className="gradient-label">GET IN TOUCH</p>

        <h2>
          Let's build something <span className="highlight-text">awesome.</span>
        </h2>

        <span className="section-heading-subtitle contact-subtitle-styled">
          Have an <span className="subtitle-highlight-green">opportunity</span>,{" "}
          <span className="subtitle-highlight-green">project idea</span> or just want to connect?{" "}
          <span className="subtitle-highlight-gold">Feel free to reach out.</span>
        </span>
      </div>

      <div className="contact-grid">
        <div className="contact-left reveal">
          <p className="small-label">CONTACT INFORMATION</p>

          <h3>Let's Connect.</h3>

          <p>
            I'm open to discussing development opportunities,
            collaborations and interesting projects.
          </p>

          <div className="contact-items">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shashwatgupta205%40gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link contact-item-email"
            >
              <span className="contact-item-icon">
                <MailIcon size={18} />
              </span>

              <div>
                <small className="contact-label">EMAIL</small>
                <p>shashwatgupta205@gmail.com</p>
              </div>
            </a>

            <a
              href="https://github.com/shashwat05-stack"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link contact-item-github"
            >
              <span className="contact-item-icon">
                <GithubIcon size={18} />
              </span>

              <div>
                <small>GITHUB</small>
                <p>shashwat05-stack</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/shashwat-g-9438a0247/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link contact-item-linkedin"
            >
              <span className="contact-item-icon">
                <LinkedinIcon size={18} />
              </span>

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
                className="social-link github-link"
                aria-label="GitHub"
                title="GitHub"
              >
                <GithubIcon size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/shashwat-g-9438a0247/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link linkedin-link"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=shashwatgupta205%40gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link email-link"
                aria-label="Email"
                title="Email"
              >
                <MailIcon size={20} />
              </a>

              <a
                href="https://leetcode.com/u/p2lSQfqYKV/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link leetcode-link"
                aria-label="LeetCode"
                title="LeetCode"
              >
                <LeetCodeIcon size={20} />
              </a>

              <a
                href="https://www.geeksforgeeks.org/profile/shashwatg7cp5"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link gfg-link"
                aria-label="GeeksforGeeks"
                title="GeeksforGeeks"
              >
                <GfgIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-card reveal">
          <div className="contact-card-header">
            <p className="small-label">SEND A MESSAGE</p>
            <h3>Start a conversation.</h3>
            <p className="contact-card-sub">
              Fill out the form below or email me directly.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            action={FORMSPREE_ENDPOINT}
            method="POST"
            className="contact-form"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Project Inquiry / Job Opportunity"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="3"
                placeholder="Hi Shashwat, I'd like to discuss..."
                required
                className="form-input form-textarea"
              ></textarea>
            </div>

            {status === "success" && (
              <div className="form-status form-status-success">
                ✓ Thanks! Your message has been sent successfully.
              </div>
            )}

            {status === "error" && (
              <div className="form-status form-status-error">
                ⚠ {errorMessage || "Something went wrong. Please try again or email me directly."}
              </div>
            )}

            <div className="form-actions">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="primary-btn submit-btn"
              >
                {status === "submitting" ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <SendIcon size={16} />
                  </>
                )}
              </button>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=shashwatgupta205%40gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="outline-btn direct-email-btn"
              >
                <MailIcon size={16} /> Direct Email
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
