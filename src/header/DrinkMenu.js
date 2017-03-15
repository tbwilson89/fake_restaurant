import React, { Component } from 'react';
import styled from 'styled-components'

const Wrapper = styled.section`
  background: grey;
  margin: 0;
  border-radius: 5px;
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
const AddPrice = styled.span`
  float: right;
  padding-right: 25px;
`
const Icon = styled.i`
  padding: 3px;
`

class Drinks extends Component {
  render(){
    return (
      <Wrapper>
        <List>
          <li><Icon className='fa fa-arrow-circle-o-right'></Icon>Tea
          <Price>$1.49</Price>
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
          <li><Icon className='fa fa-arrow-circle-o-right'></Icon>Soda
          <Price>$1.49</Price>
            <List>
              <li>Pepsi</li>
              <li>Dr. Pepper</li>
              <li>Mt. Dew</li>
              <li>Sprite</li>
              <li>Root Beer</li>
            </List>
          </li>
          <li><Icon className='fa fa-arrow-circle-o-right'></Icon>Coffee
          <Price>$1.99</Price>
        </li>
        </List>
      </Wrapper>
    )
  }
}

export default Drinks;
