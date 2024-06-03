import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer>
    <nav>
      <div className="nav-links-container">
        <ul className="nav_links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
    <p>Copyright &#169; 2023 Sandeeb Adhikari. All Rights Reserved.</p>
  </footer>
);

export default Footer;
