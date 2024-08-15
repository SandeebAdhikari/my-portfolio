import React from 'react';
import './NavBar.css';
import logoImg from '../../assets/logo.png';

const NavBar = ({ darkMode }) => (
  <nav id="webpage-nav" className={darkMode ? 'dark-mode' : ''}>
    <div className="logo-container">
      <img src={logoImg} alt="SA logo" className="logo-pic" />
      <div className="logo-text">Sandeeb Adhikari</div>
    </div>
    <div>
      <ul className="nav_links">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
