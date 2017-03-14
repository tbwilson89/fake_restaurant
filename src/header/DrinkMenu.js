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

class Drinks extends Component {
  render(){
    return (
      <Wrapper>
        <List>
          <li>Tea
            <List>
              <li>Black</li>
              <li>Green</li>
              <li>Fruit Flavors:
                <ul>
                  <li>Blackberry</li>
                  <li>Peach</li>
                  <li>Mango</li>
                </ul>
              </li>
            </List>
          </li>
          <li>Soda
            <List>
              <li>Pepsi</li>
              <li>Dr. Pepper</li>
              <li>Mt. Dew</li>
              <li>Sprite</li>
              <li>Root Beer</li>
            </List>
          </li>
          <li>Coffee</li>
        </List>
      </Wrapper>
    )
  }
}

export default Drinks;
