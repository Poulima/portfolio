import React, { Component } from 'react';
import { Topbar } from '../styles/topBar';
import EachSection from './eachSection';
class TopBar extends Component {


  handleActivityLinks = (event) => {
    this.props.handleActivityLinks(event);
  }

  render() {
    const { options, selectedItem } = this.props;
    return (
      <Topbar key="navigationTab" id="navigationTab" onClick={this.handleActivityLinks}>
        { options.map( option => <EachSection key={option.id} option={option} selectedItem={selectedItem}/>) }
      </Topbar>
    );
  }
}

export default TopBar;
