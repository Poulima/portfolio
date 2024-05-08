import React, { Component } from 'react';
import WorkDes from './WorkDes';
import { WorkSection, WorkList, Wrapper } from '../styles/work';
import Modal from 'react-modal';
import closeIcon from '../images/close.png';

// const customStyles = {
//   content: {
//     top: '55%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     width: '80%',
//     height: '75vh',
//     fontFamily: 'KarlaRegular',
//     paddingBottom: '30px',
//   },


// };

let my_works = [
  {
    id: 1,
    title: 'Design System',
    des: 'Design System is the single source of truth for Verizon’s digital experience. It is collection of reusable components and standards that can be assembled together to build any number of applications.',
    roles: 'Design System Engineer',
    tech: [
      'React Library with TypeScript and Styled Components',
      'Lerna and Yarn workspaces for handling the monorepo',
      'Storybook for developing and testing components',
      'Jest with testing-library/react for writing test cases',
      'Vitefor building the component',
      'Nodejs, Express, and MongoDB for creating RESTful APIs for the documentation site',
      'React with Redux for implementing the user interface of the documentation site',
      'AWS EKS along with Jenkins CICD pipelines to automate the application deployment',
    ],
    res: [
      'Convert reusable design components into reusable code components and maintain the performance, accessibility, and responsiveness to ensure that the design is implemented correctly in different contexts',
      'Implement unit testing for UI components to ensure they meet design and functionality standards',
      'Produce clear, actionable documentation that helps designers and developers understand the design system',
      'Participate in code reviews to ensure adherence to design guidelines and code quality',
      'Regularly audit the design system to remove redundancy and improve load times',
      'Handling various areas in application infrastructure including jenkins jobs for build and deployment, github webhooks configuration, cluster creation, upgrade and rehydration, HELM template configuration, maintenance of groovy scripts, Dockerfile, and docker base image',
    ],
  },
  {
    id: 2,
    title: 'WSR',
    des: 'A report management tool which gives users a new experience in logging day to day tasks and helps the management to seamlessly track the efforts and productivity of resources, further improving business.',
    roles: 'MERN Stack Developer',
    tech: [
      'React Library with Nodejs, Express.js, and MongoDB',
      'jwt for user authentication',
      'bCrypt method for password encryption',
      'pptxgenjs library used for generating reports by exporting to ppt',
      'Hosted on AWS platform',
    ],
    res: [
      'Develop and maintain this robust and scalable web application from scratch using the MERN stack',
      'Design and implement RESTful APIs for seamless integration between front-end and back-end systems',
      'Implement unit testing to ensure that each unit of the software performs as intended and meets requirements',
      'Work closely with UI/UX designers to create responsive and visually appealing user interfaces',
      'Troubleshoot, debug, and optimize code to ensure high performance, and reliability',
      'Performing blackduck scan to ensure security and data protection measures are in-line with industry best practices',
      'Maintaining the application infrastructure and performing quarterly rehydration activities',
    ],
  },
  {
    id: 3,
    title: 'VIBE',
    des: 'FrescoVibe is a blogging app like Medium, powered by React/Redux. We have used Workbox for service worker and Lighthouse for performance measurement.',
    roles: 'Front End Developer',
    tech: [
      'Developed with React, Redux, Redux Saga and Styled components',
      'Bundled with Webpack module bundler along with Babel',
    ],
    res: [
      'Write well-structured code that is easy to maintain and understand',
      'Optimize code for performance, ensuring fast loading times and smooth user experience',
      'Ensure that the application is responsive and works consistently across different web browsers and devices',
      'Test and debug the code to address any compatibility issues that may arise'
    ],
  },
];

class Works extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      selectedProject: {},
    };

    this.handleClick = this.handleClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    document
      .getElementById('wrapper')
      .addEventListener('click', this.closeModal);
  }

  componentWillUnmount() {
    document.getElementById('wrapper').removeEventListener('click');
  }

  handleClick(project) {
    let projectRes = project && project.res;
    let projectName = project && project.title;
    let projectTech = project && project.tech;
    this.setState({
      modalIsOpen: true,
      selectedProjectRes: projectRes || [],
      selectedProjectName: projectName,
      selectedProjectTech: projectTech || [],
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
    });
  }

  render() {
    const {
      modalIsOpen,
      selectedProjectRes,
      selectedProjectName,
      selectedProjectTech,
    } = this.state;
    const { type } = this.props;
    return (
      <WorkSection id={type} key='work_section'>
        <div className='dark_background'>
          <div className='work_wrapper'>
            <h3 className='title'>What I have done</h3>
            <WorkList>
              {my_works.map((project) => (
                <WorkDes
                  key={project.id}
                  project={project}
                  handleClick={this.handleClick}
                />
              ))}
            </WorkList>

            <Modal
              closeTimeoutMS={500}
              isOpen={modalIsOpen}
              onRequestClose={this.closeModal}
              //style={customStyles}
              className="Modal"
            >
              <Wrapper>
                <div className='modalHeader'>
                  <h2>{selectedProjectName}</h2>
                  <img
                    className='closeIcon'
                    src={closeIcon}
                    alt='close-icon'
                    onClick={this.closeModal}
                  />
                </div>

                <div>
                  <h4>Technologies</h4>
                  <ul className='listWrapper'>
                    {selectedProjectTech &&
                      selectedProjectTech.map((tech) => <li>{tech}</li>)}
                  </ul>

                  <h4>Responsibilities</h4>
                  <ul className='listWrapper'>
                    {selectedProjectRes &&
                      selectedProjectRes.map((res) => <li>{res}</li>)}
                  </ul>
                </div>
              </Wrapper>
            </Modal>
          </div>
        </div>
      </WorkSection>
    );
  }
}

export default Works;
