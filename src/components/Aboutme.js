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
            {/* <h3 className="header theme_color">Hi Guys!</h3> */}
            <p className="about_myself">This is Poulima Biswas, an enthusiastic React fullstack developer working on web application development. I have 8.5+ years of relevant industry experience. I have been primarily working in Agile environment with Redux, Styled Components, NodeJS, Express, and MongoDB while using Docker, Kubernetes, and AWS for code deployment. I am always looking forward in learning new tools and technologies. Keep scrolling down to check out my areas of expertise.</p>
            <a href={resume} className="download_resume" download> DOWNLOAD RESUME </a>
          </div>
        </RightSection>
        </MyDetails>
      </About>
    );
  }
}

export default Aboutme;
