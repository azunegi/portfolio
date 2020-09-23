import React from "react";
import styled from "@emotion/styled";
import scrollTo from 'gatsby-plugin-smoothscroll';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  background-color: rgba(255,255,255,0.9);
  z-index: 10;
  `;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  font-family: "Ubuntu";
  align-items: center;
  font-size: 1.8rem;
  letter-spacing: -0.03rem;

  & > button {
    padding: 4px 8px;
    color: #4db789;
     &:hover {
       opacity: 0.8;
     }
  }
  `;

const Logo = styled.img`
  width: 36px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  `;

const Header: React.FC = ({ children }) => {
    return (
        <Wrapper>
            <div onClick={() => scrollTo('#pageTop')}><Logo src="/img/logo.svg" alt="logo"/></div>
            <Navigation>
              <button onClick={() => scrollTo('#profile')}>Profile</button>
              <button onClick={() => scrollTo('#works')}>Works</button>
              <button onClick={() => scrollTo('#hobby')}>Hobby</button>
              <button onClick={() => scrollTo('#contact')}>Contact</button>
            </Navigation>
        </Wrapper>
    )
}


export default Header
