import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Imports
import PageNav from './components/nav/PageNav';
import Header from './components/header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <PageNav />
        <Header />
      </div>
    );
  }
}

export default App;
