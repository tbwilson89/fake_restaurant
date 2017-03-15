import React, { Component } from 'react';
import styled from 'styled-components'
import FreshImage from './images/fresh.jpg'

const Wrapper = styled.section`
  display: flex;
  background: black;
  border-radius: 5px;
`
const Info = styled.div`
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
const Sign = styled.p`
  text-align: right;
  font-style: italic;
`

class Intro extends Component {
  render() {
    return (
      <Wrapper>
        <Info>
          <h3>Welcome to Generic Restaurant.</h3>
          <p>We pride ourselves in serving only the finest of generic cuisine and hope that we can make your experience as generic as possible.</p>
          <p>If we in any way exceed your expectations please let us know so we can readjust for a more genuine generic experience.</p>
          <p>Thank you for your support!</p>
          <Sign>~Management</Sign>
        </Info>
        <Picture src={FreshImage} alt='Fresh Food' />
      </Wrapper>
    )
  }
}

export default Intro;
