import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Imports
import PageNav from './components/nav/PageNav';
import Header from './components/header/Header';
import ResumeCollapse from './components/body/ResumeCollapse'; // Collapse

class App extends Component {
  render() {
    return (
      <div>
        <PageNav />
        <Header />
        <ResumeCollapse />
      </div>
    );
  }
}

export default App;
