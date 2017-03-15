import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  height: 100px;
  width: 100%;
`
const Content = styled.div`
  padding-top: 10px;
  padding-left: 10px;
`
const Title = styled.h1`
  margin: 0;
  font-size: 2em;
`
const Slogan = styled.p`
  margin: 0;
  padding-top: 0px;
  font-size: 1.05em;
`

class TopSection extends Component {
  render() {
    return (
      <Wrapper id={this.props.id}>
        <Content>
          <Title>Generic Restaurant</Title>
          <Slogan>Only the finest in generic cuisine</Slogan>
        </Content>
      </Wrapper>
    )
  }
}

export default TopSection;
