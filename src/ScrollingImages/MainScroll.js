import React, { Component } from 'react';
import styled from 'styled-components'
import myImage from './images/fooddisplay.jpg'
import myImageTwo from './images/foodmarket.jpg'

const Section = styled.div`
  position: relative;
  z-index: 1;
  height: 100px;
  width: 100%;
  background-image: url(${props => props.bg})
  background-attachment: fixed;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  font-size: 1.5em;
  color: white;
  text-shadow: -2px 0 black, -2px 0 black, -2px 0 black, -2px 0 black;
`

class MainScroll extends Component {

  render() {
    return (
      <div>
        <Section bg={this.props.bg}>
        <br></br><p>This is information about this picture!.</p>

        </Section>
      </div>
    )
  }
}

export default MainScroll;
