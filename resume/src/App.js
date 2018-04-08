import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Imports
import PageNav from './components/nav/PageNav';
import Header from './components/header/Header';

import ResumeCollapse from './components/body/ResumeCollapse'; // Collapse
import ResumeStand from './components/body/ResumeStand'; // Standard

class App extends Component {
  render() {
    return (
      <div className="containerDiv">
        <PageNav />
        <Header />
        <ResumeStand />
      </div>
    );
  }
}

export default App;
