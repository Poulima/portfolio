import React, { Component } from 'react';
import { HomePage } from '../styles/home';

class Home extends Component {
  render() {
    const { type } = this.props;
    return (
      <HomePage id={type} key="home_section" viewSection='view' >
        <div className="introduction">
          <span className="script-font header-title animatedText animatedFadeInUp fadeInUp">Hi This is</span>
          <p className="title animatedText animatedFadeInUp fadeInUp"> Poulima Biswas </p>
          <span className="role script-font animatedText animatedFadeInUp fadeInUp"> React Fullstack Developer </span>
        </div>
      </HomePage>
    );
  }
}

export default Home;
