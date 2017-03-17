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
const Price = styled.span`
  float: right;
  padding-right: 50px;
`
const Icon = styled.i`
  padding: 3px;
`

class Menu extends Component {
  render(){
    return (
      <Wrapper>
        <List>
          <li><Icon className='fa fa-square-o'></Icon>Generic Burger
          <Price>$6.99</Price>
        </li>
          <li><Icon className='fa fa-square-o'></Icon>Generic Salad
          <Price>$5.99</Price>
            <ul>
              <li>Caesar</li>
              <li>House</li>
            </ul>
          </li>
          <li><Icon className='fa fa-square-o'></Icon>Generic Sandwich
          <Price>$5.99</Price>
            <ul>
              <li>Turkey</li>
              <li>BLT</li>
            </ul>
          </li>
          <li><Icon className='fa fa-square-o'></Icon>Generic Chicken
          <Price>$6.99</Price>
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
