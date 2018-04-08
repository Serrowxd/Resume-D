import React, { Component } from 'react';
import './Header.css';

import TopHeader from './TopHeader';
import BottomHeader from './BottomHeader';

class Header extends Component {
  render() {
    return (
      <div>
        <TopHeader />
        <BottomHeader />
      </div>
    );
  }
}

export default Header;
