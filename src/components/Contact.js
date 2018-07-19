import React, { Component } from 'react';
import { ContactSection } from '../styles/contact';
import mobile_logo from '../images/phone_logo.png';
import mail_logo from '../images/mail_logo.png';

class Contact extends Component {
  render() {
    const { type } = this.props;
    return (
      <ContactSection id={type} key="contact_section">
        <div className="contact_details">
          <img alt="phone_logo" src={mobile_logo} className="contact-logo"/>
          <p className="no-margin grey"> +91 8939326005</p>
        </div>
        <div className="contact_details">
          <img alt="mail_logo" src={mail_logo} className="contact-logo" />
          <p className="no-margin grey"> <a href= "mailto:biswaspoulima36.com">biswaspoulima36.com</a> </p>
        </div>
      </ContactSection>
    );
  }
}

export default Contact;
