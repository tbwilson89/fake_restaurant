import React, { Component } from 'react';
import styled from 'styled-components'
import Intro from './header/Intro'
import NavBar from './header/NavBar'
import VegMenu from './header/VegMenu'
import TopSection from './header/TopSection'
import MainScroll from './ScrollingImages/MainScroll'
import Menu from './header/LunchMenu'
import Drinks from './header/DrinkMenu'
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
        <TopSection />
        <NavBar />
        <Intro />
        <MainScroll bg={ImageOne} title="Menu" id='menu'/>
        <Menu />
        <MainScroll bg={ImageTwo} title="Vegetarian" id='vegetarian' />
        <VegMenu />
        <MainScroll bg={ImageThree} title="Drinks" id="drinks"/>
        <Drinks />
        <ExtendSection />
      </Wrapper>
    );
  }
}

export default App;
