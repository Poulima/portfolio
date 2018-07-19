import React, { Component } from 'react';
import profileImage from '../images/profile.jpg';
import { About , MyDetails, RightSection, MyInfo } from '../styles/about';
import resume from '../docs/Resume.pdf';

class Aboutme extends Component {
  render() {
    const { type } = this.props;
    return (
      <About id={type} key="about_section">
        <MyDetails>
        <div>
          <img alt="user" className="profileImage" src={ profileImage } />
        </div>
        <RightSection>
        <h3 className="header">Hi Guys!</h3>
        <p className="about_myself grey">An avid learner of latest front-end technologies, aspiring to leave a lasting impression on the development world by working in high-performing digital products. A proactive individual willing to work in a team of technology lovers.</p>

        <MyInfo>
          <p>  <span className="focus fixed-width"> Name </span> : <span className="grey"> Poulima Biswas </span> </p>
          <p> <span className="focus fixed-width"> Age </span> : <span className="grey"> 25 </span> </p>
          <p> <span className="focus fixed-width"> Experience </span> : <span className="grey"> 3 years </span> </p>
          <p> <span className="focus fixed-width"> Country </span> : <span className="grey"> India </span> </p>
          <p> <span className="focus fixed-width"> Location </span> : <span className="grey"> Chennai </span> </p>
          <p> <span className="focus fixed-width"> e-mail </span> : <span className="grey"> biswaspoulima36@gmail.com </span> </p>
          <p> <span className="focus fixed-width"> Phone </span> : <span className="grey"> +91 8930326005 </span> </p>
          <p> <span className="focus fixed-width"> Job Change </span> : <span className="grey"> Available </span> </p>
        </MyInfo>

        <a href={resume} className="download_resume" download> DOWNLOAD RESUME </a>
        </RightSection>
        </MyDetails>
      </About>
    );
  }
}

export default Aboutme;
