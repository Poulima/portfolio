import React, { Component } from 'react';
import { EachWorkDes } from '../styles/work';

class WorkDes extends Component {

  render() {
    const { des } = this.props;
    return (
      <EachWorkDes work_id={des.id} className="work-tab">
        <div className="tab-content work-title">
          <h3>{des.title}</h3>
        </div>
        <div className="tab-content work-details">
          <span>{des.des}</span>
        </div>

      </EachWorkDes>
    );
  }
}

export default WorkDes;
