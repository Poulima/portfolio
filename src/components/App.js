import React, { Component } from 'react';
import './App.css';
import TopBar from './TopBar';
import Home from './Home';
import Aboutme from './Aboutme';
import Skills from './Skills';
import Works from './Works';
import Contact from './Contact';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedItem : 'home',
      detail : [{ id:'home', title:'Home'},
                { id:'aboutme', title:'About me'},
                { id:'skills', title:'Skills'},
                { id:'works', title: 'Projects'},
                { id:'contact', title: 'Contact'},
               ]
    }

    this.handleActivityLinks = this.handleActivityLinks.bind(this);
    this.processScroll = this.processScroll.bind(this);
  }

  componentDidMount() {
  document
    .getElementById('wrapper')
    .addEventListener('scroll', this.processScroll);
  }

  componentWillUnmount() {
    document
      .getElementById('wrapper')
      .removeEventListener('scroll', this.processScroll);
  }

  handleActivityLinks(event) {
    const targetSectionId = event.target.getAttribute('data-id');
    const targetItem = document.getElementById(targetSectionId);
    if (targetItem) {
      targetItem.scrollIntoView({behavior: "smooth"});
    }
  }

  processScroll() {

    const window_top = document.getElementById('wrapper').scrollTop + 48;
    const home_section_top = document.getElementById('home').offsetTop;
    const home_section_height = document.getElementById('home').offsetHeight + home_section_top - 200;

    const about_section_top = document.getElementById('aboutme').offsetTop;
    const about_section_height = document.getElementById('aboutme').offsetHeight + about_section_top - 200;

    const skill_section_top = document.getElementById('skills').offsetTop;
    const skill_section_height = document.getElementById('skills').offsetHeight + skill_section_top - 200;

    const work_section_top = document.getElementById('works').offsetTop;
    const work_section_height = document.getElementById('works').offsetHeight + work_section_top - 200;

    const contact_section_top = document.getElementById('contact').offsetTop;

    if(home_section_top <= window_top && home_section_height > window_top) {
      this.setState({ selectedItem : 'home' });
    } else if (about_section_top <= window_top && about_section_height > window_top) {
      this.setState({ selectedItem : 'aboutme' });
    } else if (skill_section_top <= window_top && skill_section_height > window_top) {
      this.setState({ selectedItem : 'skills' });
    } else if (work_section_top <= window_top && work_section_height > window_top) {
      this.setState({ selectedItem : 'works' });
    } else if (contact_section_top < window_top  ) {
      this.setState({ selectedItem : 'contact' })
    }
    const elements = document.getElementsByClassName('skillLogo');
    const skillList = [...elements];
    if ((skill_section_top - window_top)  <= 500) {
      skillList.forEach( (data,index) => data.classList.add('animationEffect'));
    } else {
      skillList.forEach( (data,index) => data.classList.remove('animationEffect'));
    }

    if ((about_section_top - window_top)  <= 500) {
      document.querySelector('.profile_image').classList.add('animationProfileImage');
      document.querySelector('.profile_details').classList.add('animationProfileDetails');
    } else {
      document.querySelector('.profile_image').classList.remove('animationProfileImage');
      document.querySelector('.profile_details').classList.remove('animationProfileDetails');
    }
  }


  render() {
    const { detail, selectedItem } = this.state;
    return (
      <div id="wrapper">
        <Home type='home' />
        <Aboutme type='aboutme' />
        <Skills type='skills' />
        <Works type='works' />
        <Contact type='contact' />
        <TopBar  options={detail} selectedItem={selectedItem}
        handleActivityLinks={this.handleActivityLinks} />
      </div>
    );
  }
}

export default App;
