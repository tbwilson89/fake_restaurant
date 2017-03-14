import React, { Component } from 'react';
import styled from 'styled-components'

const Wrapper = styled.section`
  background: grey;
  margin: 0;
`

const List = styled.ul`
  text-decoration: none;
  list-style: none;
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
`

class Menu extends Component {
  render(){
    return (
      <Wrapper>
        <List>
          <li>Generic Burger</li>
          <li>Generic Salad
            <ul>
              <li>Caesar</li>
              <li>House</li>
            </ul>
          </li>
          <li>Generic Sandwich
            <ul>
              <li>Turkey</li>
              <li>BLT</li>
            </ul>
          </li>
          <li>Generic Chicken
            <ul>
              <li>Strips</li>
              <li>Fried</li>
            </ul>
          </li>
        </List>
      </Wrapper>
    )
  }
}

export default Menu;
