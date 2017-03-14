import React, { Component } from 'react';
import styled from 'styled-components'
import FreshImage from './images/fresh.jpg'

const Wrapper = styled.section`
  display: flex;
  background: black;
  border-radius: 5px;
`
const Info = styled.div`
  background: black;
  color: white;
  width: 50%;
  padding: 10px;
  border-radius: 5px;
`
const Picture = styled.img`
  width: 50%;
  height: 300px;
  border-radius: 5px;
  background-image: url(${FreshImage})
`

class Intro extends Component {
  render() {
    return (
      <Wrapper>
        <Info>
          This is where information will go.
        </Info>
        <Picture src={FreshImage} alt='Fresh Food' />
      </Wrapper>
    )
  }
}

export default Intro;
