import React, { Component } from 'react';
import logo from '../../../src/media/header-temp.png';
import './TopHeader.css';

class TopHeader extends Component {
  render() {
    return (
      <div className="topHeader">
        <img src={logo} alt={'logo'} className="middleImage" />
        <h1 className="headerText"> Jon Jolley </h1>
      </div>
    );
  }
}

export default TopHeader;
