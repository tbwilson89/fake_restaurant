import React, { Component } from 'react';
import styled from 'styled-components'

const Wrapper = styled.section`
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

class VegMenu extends Component {
  render() {
    return (
      <Wrapper>
        <List>
          <li><Icon className='fa fa-square-o'></Icon>
          Vegetables
          <Price>$6.99</Price>
            <ul>
              <li>Lots of Vegetables</li>
              <li>No really, whatever you want.</li>
              <li>(I know those in the picture are mostly fruits...)</li>
            </ul>
          </li>
        </List>
      </Wrapper>
    )
  }
}

export default VegMenu;
