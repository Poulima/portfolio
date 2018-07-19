import React, { Component } from 'react';
import htmlLogo from '../images/html_logo.png';
import cssLogo from '../images/css3_logo.png';
import reactLogo from '../images/react_logo.png';
import reduxLogo from '../images/redux_logo.svg';
import styledComponentLogo from '../images/styled-components.png';
import angularLogo from '../images/angular_logo.png';
import pwaLogo from '../images/pwa_logo.svg';
import ionicLogo from '../images/ionic_logo.png';
import { AllSkills, SkillSection } from '../styles/skill';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills : [{ id: 1, title:'HTML5', url: htmlLogo },
                { id: 2, title:'CSS3', url: cssLogo },
                { id: 3, title:'React', url: reactLogo },
                { id: 4, title: 'Redux', url: reduxLogo },
                { id: 5, title: 'PWA', url: styledComponentLogo },
                { id: 6, title: 'Styled Component', url: angularLogo },
                { id: 7, title: 'AngularJs', url: pwaLogo },
                { id: 8, title: 'Ionic', url: ionicLogo},

               ]
    }
  }

  render() {
    const { skills } = this.state;
    const { type } = this.props;
    return (
      <SkillSection id={type} key="skill_section">
        <div>
          <h3 className="title">What I know</h3>
        </div>
        <AllSkills className="grid-container">
         { skills.map( skill => {
           return (
             <img className="skillLogo" alt="skill-logo" key={skill.id} id={skill.id} src={skill.url}  />
           )
          }
         )}
        </AllSkills>

      </SkillSection>
    );
  }
}

export default Skills;
