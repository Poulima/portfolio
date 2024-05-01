import React, { Component } from 'react';
import { EachWorkDes } from '../styles/work';

class WorkDes extends Component {

  render() {
    const { project, handleClick } = this.props;
    return (
      <EachWorkDes work_id={project.id} className="work-tab">
        <div className="tab-content work-title">
          <h3>{project.title}</h3>
        </div>
        <div className="tab-content work-details">
          <span>{project.des}</span>
          <button className="projectDetailsButton" onClick={() => handleClick(project)}>Know more...</button>
        </div> 

      </EachWorkDes>
    );
  }
}

export default WorkDes;
