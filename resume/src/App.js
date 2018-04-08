import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Imports
import NavBar from './components/nav/navBar';
import Header from './components/header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Header />
      </div>
    );
  }
}

export default App;
