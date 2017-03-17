import React, { Component } from 'react';
import styled from 'styled-components'

const Wrapper = styled.section`
  background: #444;
  height: 145px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top: 2px solid black;
  box-shadow: 0px -2px 2px black;
  display: flex;
  justify-content: space-around;

  a {
    text-decoration: none;
    color: black;
  }
`
const Social = styled.div`
  height: 100%;
  width: 30%;

  ul {
    list-style: none;
    margin: 3px;
    padding-left: 30px;

    li {
      padding: 3px;
    }
  }
`
const SocialTitle = styled.h4`
  margin: 10px;
`
const SectionTitle = styled.h4`
  margin-bottom: 10px;
  margin-top: 10px;
`
const Information = styled.div`
  height: 100%;
  width: 30%;
`
const Plug = styled.div`
  height: 100%;
  width: 30%;
`
const Divider = styled.div`
  border-bottom: 2px solid black;
  padding-bottom: 5px;
  p {
    margin: 0;
    padding: 0;
  }
`

class Footer extends Component {
  render(){
    return(
      <Wrapper>
        <Social>
          <SocialTitle>Social Media</SocialTitle>
          <ul>
            <li><a href='#'><i className='fa fa-facebook-official'></i>Facebook</a></li>
            <li><a href='#'><i className='fa fa-twitter-square'></i>Twitter</a></li>
            <li><a href='#'><i className='fa fa-instagram'></i>Instagram</a></li>
          </ul>
        </Social>
        <Information>
          <SectionTitle>Information</SectionTitle>
          We have the right to refuse service to whoever we want, thank you.
        </Information>
        <Plug>
          <Divider>
            <SectionTitle>Contact</SectionTitle>
            <p>(903)123-4567</p>
            <a href='#'>GenericRestaurants@GR.com</a>
          </Divider>
          <SectionTitle>Design</SectionTitle>
          TBWilson Design
        </Plug>
      </Wrapper>
    )
  }
}

export default Footer;
