import React, { Component } from 'react';
import styled from 'styled-components'
import TopSection from './header/TopSection'
import MainScroll from './ScrollingImages/MainScroll'
import logo from './logo.svg';
import ImageOne from './ScrollingImages/images/fooddisplay.jpg'
import ImageTwo from './ScrollingImages/images/foodmarket.jpg'
import './App.css';
var image = './images/fooddisplay.jpg'

const Wrapper = styled.section`
  max-width: 800px;
  margin: 10px auto;
`
const ExtendSection = styled.section`
  height: 2000px;
  background-color: grey;
`

class App extends Component {
  render() {
    return (
      <Wrapper>
      <div>
        <TopSection />
        <MainScroll bg={ImageOne} />
        <TopSection />
        <MainScroll bg={ImageTwo} />
        <ExtendSection />
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Fake Restaurant Webpage!</h2>
          </div>
          <p className="App-intro">
            We serve nothing but the fakest food out there!
          </p>
        </div>
      </div>
      </Wrapper>
    );
  }
}

export default App;
