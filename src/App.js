import React, { Component } from 'react';
import './App.css';
import AppBar from './AppBar';
import AppHome from './AppHome';
import Page2 from './Page2';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <AppHome />
        <Page2 />
      </div>
    );
  }
}

export default App;
