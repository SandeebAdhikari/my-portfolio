import React from 'react';
import CheckmarkImg from '../../assets/checkmark.png';
import ArrowImg from '../../assets/arrow.png';
import './Experience.css';

const Experience = ({ darkMode }) => (
  <section id="experience" className={darkMode ? 'dark-mode' : ''}>
    <p className="section_text_P1">Explore My</p>
    <h1 className="name">Experience</h1>
    <div className={`experience-details-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="about-containers">
        <div className={`details ${darkMode ? 'dark-mode' : ''}`}>
          <h2 className={`experience-sub-title${darkMode ? 'dark-mode' : ''}`}>Frontend Development</h2>
          <div className="article-container">
            <article>
              <img src={CheckmarkImg} alt="Experience icon" className="icon" />
              <div>
                <h3>HTML</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img src={CheckmarkImg} alt="Experience icon" className="icon" />
              <div>
                <h3>CSS</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img src={CheckmarkImg} alt="Experience icon" className="icon" />
              <div>
                <h3>Javascript</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img src={CheckmarkImg} alt="Experience icon" className="icon" />
              <div>
                <h3>SAAS</h3>
                <p>Basic</p>
              </div>
            </article>
          </div>
        </div>
        <div className={`details ${darkMode ? 'dark-mode' : ''}`}>
          <h2 className={`experience-sub-title${darkMode ? 'dark-mode' : ''}`}>Backend Development</h2>
          <div className="article-container">
            <article>
              <img src={CheckmarkImg} alt="Experience icon" className="icon" />
              <div>
                <h3>Python</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img src={CheckmarkImg} alt="Experience icon" className="icon" />
              <div>
                <h3>Java</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img src={CheckmarkImg} alt="Experience icon" className="icon" />
              <div>
                <h3>Git</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img src={CheckmarkImg} alt="Experience icon" className="icon" />
              <div>
                <h3>PostgreSQL</h3>
                <p>Basic</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
    <img src={ArrowImg} alt="Arrow Icon" className="icon arrow" onClick={() => window.location.href = './#projects'} />
  </section>
);

export default Experience;
