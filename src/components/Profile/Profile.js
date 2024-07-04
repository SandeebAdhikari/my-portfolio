import React from 'react';
import ProfileImg from '../../assets/profile-pic.png'
import LinkedInImg from '../../assets/linkedin.png'
import GitHubImg from '../../assets/github.png'
import ResumePDF from '../../assets/Sandeeb_Resume.pdf'
import ArrowImg from '../../assets/arrow.png'
import './Profile.css';

const Profile = () => (
  <section id="profile">
    <div className="section_profile-pics">
      <img src={ProfileImg} alt= "profile_picture" />
    </div>
    <div className="section_text">
      <p className="section_text_P1">Hello, I'm</p>
      <h1 className="name">Sandeeb Adhikari</h1>
      <p className="section_text_P2">Software Engineer (currently final year Student at NJIT)</p>
      <div className="btn-container">
        <button className="btn btn-color-2" onClick={() => window.open(ResumePDF)}>Resume</button>
        <button className="btn btn-color-1" onClick={() => window.location.href = './#contact'}>Contact Info</button>
      </div>
      <div id="socials-container">
        <img src={LinkedInImg} alt="Linkedin Profile" className="icon" onClick={() => window.location.href = 'https://www.linkedin.com/in/sandeeb-adhikari-2129a0236/'} />
        <img src={GitHubImg} alt="GitHub Profile" className="icon" onClick={() => window.location.href = 'https://github.com/SandeebAdhikari'} />
      </div>
    </div>
    <img src={ArrowImg} alt="Arrow Icon" className="icon arrow" onClick={() => window.location.href = './#experience'} />
  </section>
);

export default Profile;
