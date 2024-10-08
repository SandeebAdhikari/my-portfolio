import React from 'react';
import HeroImg from '../../assets/about-pic.png';
import ExperienceImg from '../../assets/experience.png';
import EducationImg from '../../assets/education.png';
import ArrowImg from '../../assets/arrow.png';
import './About.css';

const About = ({ darkMode }) => {
  return (
    <section id="about" className={darkMode ? 'dark-mode' : ''}>
      <p className="section_text_P1">Get To Know More</p>
      <h1 className="name">About Me</h1>
      <div className="section-container">
        <div className="section_profile-pics">
          <img src={HeroImg} alt="About me" className="about-pic" />
        </div>
        <div className={`about-details ${darkMode ? 'dark-mode' : ''}`}>
          <div className="about-containers">
            <div className={`details ${darkMode ? 'dark-mode' : ''}`}>
              <img src={ExperienceImg} alt="Experience icon" className="icon" />
              <h3>Experience</h3>
              <p>Currently student <br /> Software Engineer</p>
            </div>
            <div className={`details ${darkMode ? 'dark-mode' : ''}`}>
              <img src={EducationImg} alt="Education icon" className="icon" />
              <h3>Education</h3>
              <p>B.Sc. Computer Science</p>
            </div>
          </div>
          <div className="text-container">
            <p>I'm a computer science student at NJIT. I'm deeply passionate about coding and innovation, striving to make my mark in the world of technology.</p>
          </div>
        </div>
      </div>
      <img src={ArrowImg} alt="Arrow Icon" className="icon arrow" onClick={() => window.location.href = './#experience'} />
    </section>
  );
}

export default About;
