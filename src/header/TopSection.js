import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  height: 100px;
  width: 100%;
  font-size: 1.5em;
  background: grey;
`

class TopSection extends Component {
  render() {
    return (
      <Wrapper>
        <div>
          Fake Restaurant!
        </div>
      </Wrapper>
    )
  }
}

export default TopSection;
