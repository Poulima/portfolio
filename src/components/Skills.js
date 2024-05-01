import React, { Component } from 'react';
import reactLogo from '../images/logo/react.svg';
import reduxLogo from '../images/logo/redux.svg';
import nodeLogo from '../images/logo/nodejs.svg';
import expressLogo from '../images/logo/express.svg';
import mongoLogo from '../images/logo/mongodb.svg';
import dockerLogo from '../images/logo/docker.svg';
import kubernetesLogo from '../images/logo/kubernetes.svg';
import jenkinsLogo from '../images/logo/jenkins.svg';
import awsLogo from '../images/logo/aws.png';
import jestLogo from '../images/logo/jest.svg';
import webpackLogo from '../images/logo/webpack.svg';
import babelLogo from '../images/logo/babel.svg';

import { AllSkills, SkillSection } from '../styles/skill';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills : [{ id: 1, title:'React', url: reactLogo },
                { id: 2, title: 'Redux', url: reduxLogo },
                { id: 3, title: 'Node', url: nodeLogo},
                { id: 4, title: 'Express', url: expressLogo},
                { id: 5, title:'MongoDB', url: mongoLogo },
                { id: 6, title: 'Docker', url: dockerLogo},
                { id: 7, title: 'Kubernetes', url: kubernetesLogo },
                { id: 8, title: 'Jenkins', url: jenkinsLogo },
                { id: 9, title: 'AWS', url: awsLogo },
                { id: 10, title: 'JestLogo', url: jestLogo },
                { id: 11, title: 'Babel', url: babelLogo },
                { id: 12, title: 'Webpack', url: webpackLogo },
         
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
