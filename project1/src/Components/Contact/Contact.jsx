import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <h2>Collaborate with Me</h2>
        <p>
          If you’d like to invite me to a project or just chat about development,
          feel free to reach out:
        </p>
        {/* If you'd like to show your email plainly */}
        <p className="footer-email">myemail@example.com</p>

        <div className="footer-buttons">
          <a
            href="https://github.com/YOUR_GITHUB"
            className="button footer-button"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/YOUR_LINKEDIN/"
            className="button footer-button linkedin-btn"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
