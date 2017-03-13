import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Fake Restaurant Webpage!</h2>
        </div>
        <p className="App-intro">
          We server nothing but the fakest food out there!
        </p>
      </div>
    );
  }
}

export default App;
