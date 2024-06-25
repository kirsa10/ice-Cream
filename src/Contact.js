import React from 'react';
import './Contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ContactForm = () => {
  return (
    <div className="contact">
      <div className="form-container" style={{ width: '700px' }}>
        <form>
          <h2>Contact Us</h2>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="get-in-touch">
        <div className="email-container">
          <h3>Email</h3>
          <p>kirsaa101203@gmail.com</p>
        </div>
        <div className="address-container">
          <h3>Address</h3>
          <p>28b Nila Street 2 cross street <br />Erode</p>
        </div>
      </div>

      <div className="review-shop">
        <h3>Review the Shop</h3>
        <p>We value your feedback! Leave a 
           review <a href="#">here</a>.</p>
        <div className="rating">
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
        </div>
      </div>

      <div className="social-media">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
      </div>
    </div>
  );
};

export default ContactForm;
