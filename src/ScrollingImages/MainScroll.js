import React, { Component } from 'react';
import styled from 'styled-components'

const Section = styled.div`
  position: relative;
  z-index: 1;
  height: 100px;
  width: 100%;
  background-image: url(${props => props.bg})
  background-attachment: fixed;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  font-size: 1.8em;
  color: white;
  text-shadow: -1px 0px black, 1px 0px black, 0px -1px black, 0px 1px black;
`
const Title = styled.p`
  margin-left: 10px;
`

class MainScroll extends Component {

  render() {
    return (
      <div>
        <Section bg={this.props.bg}>
        <br></br>
        <Title>{this.props.title}</Title>
        </Section>
      </div>
    )
  }
}

export default MainScroll;
