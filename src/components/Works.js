import React, { Component } from 'react';
import WorkDes from './WorkDes';
import { WorkSection, WorkList } from '../styles/work';

class Works extends Component {
  constructor(props) {
    super(props);
    this.state = {
      my_works : [{ id: 1, title:'VIBE', des: 'FrescoVibe is a blogging app like Medium powered by React/Redux. We have used Workbox for service worker and lighthouse for performance measurement.' },
                { id: 2, title:'PLAY', des: 'FrescoPlay is a digital learning app like Lynda. Users can learn various technologies by reading contents, watching videos and completing quizzes.'},
                { id: 3, title:'PEAK', des: 'FrescoPeak is a performance tracking app. Users can continuously track their work performance based on goals provided by their respective supervisors.' },

               ]
    }
  }

  render() {
    const { my_works } = this.state;
    const { type } = this.props;
    return (
      <WorkSection id={type} key="work_section" >
        <div className="dark_background">
        <div className="work_wrapper">
          <h3 className="title">What I have done</h3>
          <WorkList>
            { my_works.map(work => <WorkDes key={work.id} des={work}/>)}
          </WorkList>
        </div>
        </div>
      </WorkSection>
    );
  }
}

export default Works;
