import React from 'react';
import EmailImg from '../../assets/email.png'
import LinkedInImg from '../../assets/linkedin.png'
import './Contact.css';

const Contact = () => (
  <section id="contact">
    <p className="section_text_P1">Get in Touch</p>
    <h1 className="name">Contact Me</h1>
    <div className="contact-info-upper-container">
      <div className="contact-info-container">
        <img src={EmailImg} alt="Email" className="icon contact-icon" />
        <p><a href="mailto:adhikarisandeeb@gmail.com">adhikarisandeeb@gmail.com</a></p>
      </div>
      <div className="contact-info-container">
        <img src={LinkedInImg} alt="Linkedin" className="icon contact-icon" />
        <p><a href="https://www.linkedin.com/in/sandeeb-adhikari-2129a0236/">LinkedIn</a></p>
      </div>
    </div>
  </section>
);

export default Contact;
