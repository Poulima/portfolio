import React, { Component } from 'react';
import WorkDes from './WorkDes';
import { WorkSection, WorkList, Wrapper } from '../styles/work';
import Modal from 'react-modal';
import closeIcon from '../images/close.png'

const customStyles = {
  content: {
    top: '55%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: 'auto',
    maxHeight: '80%',
    width: '80%'
  },
};

let my_works = [
  {
    "id": 1,
    "title": "VDS",
    "des": "The Verizon Design System is the single source of truth for Verizon’s digital experience.It aligns design and code resources to give designers and developers consistent, detailed documentation and standardize libraries of symbols and coded components.",
    "roles": "Design System Engineer",
    "tech": [
     "VDS has been built using React Library(v17.0.2) with TypeScript(v5.2.2) and Styled Components(v5.3.10).",
     "We use Lerna(v6.4.0) and Yarn workspaces for handling the monorepo.",
     "We have Storybook(v7.0.26) for developing and testing components.",
     "For writing test cases we use Jest(v29.7.0) with testing-library/react.",
     "We use Vite(v4.4.1) for building the component.",
     "We have used Nodejs, Express and MongoDB for creating RESTful APIs for the VDS Documentation Site.",
     "We have used React with Redux for implementing the User Interface of the VDS Documentation Site.",
     "To automate the application deployment, we use AWS EKS along with Jenkins CICD pipelines."
    ],
    "res": [
      "Convert reusable design components into reusable code components and maintain the performance, accessibility and responsiveness to ensure that the design is implemented correctly in different contexts.",
      "Implement unit testing for UI components to guarantee they meet design and functionality standards.",
      "Produce clear, actionable documentation that helps designers and developers understand the design system.",
      "Participate in code reviews to ensure adherence to design guidelines and code quality.",
      "Act as the liaison between the design and development teams, ensuring design principles are implemented accurately in code.",
      "Regularly audit the design system to remove redundancy and improve load times.",
      "Responsible for handling various areas in application infrastructure which includes - handling jenkins jobs for build and deployment, github webhooks configuration, cluster creation, upgrade and rehydration, HELM template configuration, maintenance of groovy scripts, Dockerfile and docker base image."
    ]
  },
  {
    "id": 2,
    "title": "WSR",
    "des": "A report management tool which gives users a new experience in logging day to day tasks and helps the management to seamlessly track the effort and productivity of resources, which improves business.",
    "roles": "MERN Stack Developer",
    "tech": [ 
        "This end-to-end application has been built using React Library(v16.11) with Nodejs, Express.js(v4.16.3) and MongoDB.",
        "We have used jwt(v8.2.0) for user authentication and authorization.",
        "For password encryption we have used bCrypt(v2.4.3) method.",
        "Implement unit testing to ensure that each unit of the software performs as intended and meets requirements",
        "We have implemented an export to ppt features using pptxgenjs(v3.3.1) library for generating the report.",
        "Application is hosted on the AWS platform."
    ],
    "res": [ 
     "Develop and maintain this robust and scalable web application from scratch using the MERN stack.",
     "Design and implement RESTful APIs for seamless integration between front-end and back-end systems.",
     "Work closely with UI/UX designers to create responsive and visually appealing user interfaces.",
     "Troubleshoot, debug, and optimize code to ensure high performance and reliability.",
     "Performing blackduck scan to ensure security and data protection measures are in-line with industry best practices.",
     "Maintaining the application infrastructure and performing quarterly rehydration activities."
    ]
  },
  {
    "id": 3,
    "title": "VIBE",
    "des": "FrescoVibe is a blogging app like Medium powered by React/Redux. We have used Workbox for service worker and lighthouse for performance measurement.",
    "roles": "Front End Developer",
    "tech": ["React", "Redux", "Webpack", "ES6/ES7", "Babel", "Styled components", "Redux Saga", "Eslint"],
    "res": [
        "Write well-structured code that is easy to maintain and understand.",
        "Optimize code for performance, ensuring fast loading times and smooth user experiences.",
        "Ensure that the application works consistently across different web browsers and devices. Also, test and debug code to address any compatibility issues that may arise.",
        "Build an application that adapts and works well across different devices and screen sizes.",
        "Ensure that the application is responsive." 
    ]
  }
]



class Works extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      selectedProject: {}

    }

    this.handleClick = this.handleClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount(){
    document.getElementById('wrapper').addEventListener('click', this.closeModal)
  }

  componentWillUnmount(){
    document.getElementById('wrapper').removeEventListener('click')
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
    })
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    })
  }
  

  render() {
    const { modalIsOpen, selectedProjectRes, selectedProjectName, selectedProjectTech } = this.state;
    const { type } = this.props;
    return (
      <WorkSection id={type} key="work_section" >
        <div className="dark_background">
        <div className="work_wrapper">
          <h3 className="title">What I have done</h3>
          <WorkList>
            { my_works.map(project => <WorkDes key={project.id} project={project} handleClick={this.handleClick} />)}
          </WorkList>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
          >
            <Wrapper>
              <div className='modalHeader'>
                <h2>{selectedProjectName}</h2>
                <img className="closeIcon" src={closeIcon} alt="close-icon" onClick={this.closeModal} /> 
              </div>

              <div>
                <h4>Technologies</h4>
                <ul className='listWrapper'>
                {selectedProjectTech && selectedProjectTech.map( tech => <li>{tech}</li>)}
                </ul>

                <h4>Responsibilities</h4>
                <ul className='listWrapper'>
                {selectedProjectRes && selectedProjectRes.map( res => <li>{res}</li>)}
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
