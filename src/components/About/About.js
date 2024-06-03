import React from 'react';
import HeroImg from '../../assets/about-pic.png'
import ExperienceImg from '../../assets/experience.png'
import EducationImg from '../../assets/education.png'
import ArrowImg from '../../assets/arrow.png'
import logoImg from '../../assets/logo.png'
import './About.css';

const About = () => {
  return (
  <section id="about">
    <p className="section_text_P1">Get To Know More</p>
    <h1 className="name">About Me</h1>
    <div className="section-container">
      <div className="section_profile-pics">
        <img src={HeroImg} alt="About me" className="about-pic" />
      </div>
      <div className="about-details">
        <div className="about-containers">
          <div className="details">
            <img src={ExperienceImg} alt="Experience icon" className="icon" />
            <h3>Experience</h3>
            <p>Currently student <br /> Software Engineer</p>
          </div>
          <div className="details">
            <img src={EducationImg} alt="Education icon" className="icon" />
            <h3>Education</h3>
            <p> B.Sc. Computer Science</p>
          </div>
        </div>
        <div className="text-container">
          <p>I'm a computer science student at NJIT. I'm deeply passionate about coding and innovation, striving to make my mark in the world of technology, one algorithm at a time.</p>
        </div>
      </div>
    </div>
    <img src={ArrowImg} alt="Arrow_Icon" className="icon arrow" onClick={() => window.location.href = './#experience'} />
  </section>
  )
}

export default About;
