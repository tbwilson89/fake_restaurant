import React, { Component } from 'react';
import styled from 'styled-components'
import Intro from './header/Intro'
import TopSection from './header/TopSection'
import MainScroll from './ScrollingImages/MainScroll'
import Menu from './header/LunchMenu'
import Drinks from './header/DrinkMenu'
import logo from './logo.svg';
import ImageOne from './ScrollingImages/images/fooddisplay.jpg'
import ImageTwo from './ScrollingImages/images/foodmarket.jpg'
import ImageThree from './ScrollingImages/images/drinks.jpg'
import './App.css';

const Wrapper = styled.section`
  max-width: 800px;
  background: grey;
  border-radius: 5px;
  margin: 10px auto;
  box-shadow: 0px 0px 54px 3px black;
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
        <Intro />
        <MainScroll bg={ImageOne} title="Menu"/>
        <Menu />
        <MainScroll bg={ImageTwo} title="Vegetarian" />
        <TopSection />
        <MainScroll bg={ImageThree} title="Drinks" />
        <Drinks />
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
