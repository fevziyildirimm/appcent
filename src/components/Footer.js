import React, { Component } from "react";
import styled from "styled-components";
import { FiTwitter, FiGithub } from "react-icons/fi";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";

const Div = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #30a0e014;
  padding: 30px 0;
  font-size: 36px;
`;
export class Footer extends Component {
  render() {
    return (
      <Div>
        <a href="https://twitter.com/fevziyildirmm">
          <FiTwitter />
        </a>
        <a href="https://instagram.com/fevziyildirmm">
          <AiOutlineInstagram />
        </a>
        <a href="https//facebook.com/">
          <AiOutlineFacebook />
        </a>
        <a href="https://github.com/fevziyildirimm">
          <FiGithub />
        </a>
      </Div>
    );
  }
}

export default Footer;
