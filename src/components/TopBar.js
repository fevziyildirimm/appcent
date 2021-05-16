import React, { Component } from "react";
import styled from "styled-components";
import { Dropdown } from "react-bootstrap";
const Div = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #30a0e014;
  padding: 20px 0;

  h2 {
    border: 2px solid white;
    padding: 5px 15px;
    cursor: pointer;
    border-radius:5px;
  }
`;
export class TopBar extends Component {
  render() {
    return (
      <Div>
        <a href="/appcent">
        <h2>LOGO</h2>
        </a>
        <Dropdown>
          <Dropdown.Toggle style={{background:"transparent"  }} id="dropdown-basic">
            Menu
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/About">About Page</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Div>
    );
  }
}

export default TopBar;
