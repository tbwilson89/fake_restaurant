import React, { Component } from 'react';
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  height: 35px;
  border-radius: 5px;
  align-items: center;
  align-content: center;
  justify-content: space-around;
  border: 1px solid black;
`
const Btn = styled.a`
  border-radius: 5px;
  padding-top: 10px;
  height: 30px;
  width: 80px;
  text-decoration: none;
  &:visited {
    color: #111;
  }
`

class NavBar extends Component {

  render() {
    return (
      <Wrapper>
        <Btn href='#menu'>Menu</Btn>
        <Btn href='#vegetarian'>Vegetarian</Btn>
        <Btn href='#drinks'>Drinks</Btn>
      </Wrapper>
    )
  }
}

export default NavBar;
