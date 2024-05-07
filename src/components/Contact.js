import React, { Component } from 'react';
import { ContactSection, Footer } from '../styles/contact';
import github_logo from '../images/logo/github_logo1.svg';
import mail_logo from '../images/logo/email_logo2.png';
import linkedin_logo from '../images/logo/linkedin_logo.svg';
import twitter_logo from '../images/logo/twitter_logo.png';

class Contact extends Component {
  render() {
    const { type } = this.props;
    return (
      <ContactSection id={type} key="contact_section">
        <div className='contacts'>
        <div>
          <h3 className="title">Get In Touch With Me</h3>
        </div>
        <div className="contact_link">
        <a className="contact_details" href= "mailto:biswaspoulima36.com"><img alt="mail_logo" src={mail_logo} className="contact-logo" /></a>
        <a className="contact_details" href= "https://www.linkedin.com/in/poulimabiswas/" target="_blank" rel="noopener noreferrer"><img alt="contact-logo" src={linkedin_logo} className="contact-logo" /></a>
        <a className="contact_details" href="https://github.com/Poulima" target="_blank" rel="noopener noreferrer"><img alt="github_logo" src={github_logo} className="contact-logo" /></a>

        </div>
        </div>
        <Footer>
          <span>Made with <span role="img" aria-label="Love">♥️</span></span>
          <span>Poulima Biswas</span>
          <span >All rights reserved</span>  
        </Footer>
      </ContactSection>
    );
  }
}

export default Contact;
