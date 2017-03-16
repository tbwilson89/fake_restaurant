import React, { Component } from 'react';
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  height: 35px;
  background: #444;
  border-radius: 5px;
  align-items: center;
  align-content: center;
  justify-content: space-around;
  border: 1px solid black;
`
const BtnOutline = styled.div`
  background: #555;
  color: red;
  height: 35px;
  width: 80px;
  text-align: center;
  box-shadow: 1px 0 1px 0 black, -1px 0 1px 0 black;

  &:hover {
    background: #bbb;
    color: green;
    box-shadow: 2px 0 2px 0 black, -2px 0 2px 0 black;
  }
`
const Btn = styled.a`
  border-radius: 5px;
  margin-top: 10px;
  color: black;
  font-size: 15px;
  text-decoration: none;
  display: inline-block;

  &:visited {
    color: #111;
  }
`

class NavBar extends Component {

  render() {
    return (
      <Wrapper>
        <BtnOutline>
        <Btn href='#menu'>Menu</Btn>
        </BtnOutline>
        <BtnOutline>
        <Btn href='#vegetarian'>Vegetarian</Btn>
        </BtnOutline>
        <BtnOutline>
        <Btn href='#drinks'>Drinks</Btn>
        </BtnOutline>
      </Wrapper>
    )
  }
}

export default NavBar;
