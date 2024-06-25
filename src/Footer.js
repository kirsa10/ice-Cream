import React from 'react';
import './Footer.css';  // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section address">
          <h4>Company Address</h4>
          <p>
            1234 Street Name<br />
            City, State, ZIP
          </p>
        </div>
        <div className="footer-section social-media">
          <h4>Follow Us</h4>
          <a href="https://www.facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
