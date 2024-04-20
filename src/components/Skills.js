import React, { Component } from 'react';
import sassLogo from '../images/logo/sass_logo.svg';
import reactLogo from '../images/logo/react_logo.png';
import reduxLogo from '../images/logo/redux_logo.svg';
import styledComponentLogo from '../images/logo/styled_component_logo.png';
import angularLogo from '../images/logo/angular_logo.png';
import pwaLogo from '../images/logo/pwa_logo.svg';
import ionicLogo from '../images/logo/ionic_logo.png';
import babelLogo from '../images/logo/babel_logo.png';
import webpackLogo from '../images/logo/webpack_logo.png';
import eslintLogo from '../images/logo/eslint_logo.svg';
import gruntLogo from '../images/logo/grunt_logo.png';
import gulpLogo from '../images/logo/gulp_logo.png';
import { AllSkills, SkillSection } from '../styles/skill';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills : [{ id: 1, title:'React', url: reactLogo },
                { id: 2, title: 'Redux', url: reduxLogo },
                { id: 3, title: 'Webpack', url: webpackLogo},
                { id: 4, title: 'Babel', url: babelLogo},
                { id: 5, title:'SASS', url: sassLogo },
                { id: 6, title: 'Eslint', url: eslintLogo},
                { id: 7, title: 'PWA', url: pwaLogo },
                { id: 8, title: 'Styled Component', url: styledComponentLogo },
                { id: 9, title: 'AngularJs', url: angularLogo },
                { id: 10, title: 'Ionic', url: ionicLogo},
                { id: 11, title: 'Grunt', url: gruntLogo},
                { id: 12, title: 'Gulp', url: gulpLogo},
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
             <img className="skillLogo" alt={skill.title} key={skill.id} id={skill.id} src={skill.url}  />
           )
          }
         )}
        </AllSkills>
      </SkillSection>
    );
  }
}

export default Skills;
