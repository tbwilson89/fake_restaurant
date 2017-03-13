import React, { Component } from 'react';
import styled from 'styled-components'
import TopSection from './header/TopSection'
import logo from './logo.svg';
import './App.css';

const Wrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
`

class App extends Component {
  render() {
    return (
      <Wrapper>
      <div>
        <TopSection />
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Fake Restaurant Webpage!</h2>
          </div>
          <p className="App-intro">
            We server nothing but the fakest food out there!
          </p>
        </div>
      </div>
      </Wrapper>
    );
  }
}

export default App;
