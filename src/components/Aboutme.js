import React, { Component } from 'react';
import profileImage from '../images/profile.jpg';
import { About , MyDetails, RightSection } from '../styles/about';
import resume from '../docs/Poulima_Resume.pdf';

class Aboutme extends Component {
  render() {
    const { type } = this.props;
    return (
      <About id={type} key="about_section">
        <MyDetails>
        <div className='profile_image'>
          <img alt="user" className="profileImage" src={ profileImage } />
        </div>
        <RightSection>
          <div className='profile_details'>
            <h3 className="header theme_color">Hi Guys!</h3>
            <p className="about_myself grey">My name is Poulima Biswas and I am a full-time Front End Developer who specializes in creating beautiful webpages and mobile applications. I have been in this field for 3 years, enjoying every moment and learning new things. I aspire to work on something that will leave my mark in the Development World. Keep scrolling down to check out my areas of expertise</p>
            <a href={resume} className="download_resume" download> DOWNLOAD RESUME </a>
          </div>
        </RightSection>
        </MyDetails>
      </About>
    );
  }
}

export default Aboutme;
