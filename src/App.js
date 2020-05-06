import React, { Component, Fragment } from 'react';
import NavBar from './layout/NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <nav className='navBar bg-primary'>
        <NavBar />
      </nav>
    );
  }
}

export default App;
