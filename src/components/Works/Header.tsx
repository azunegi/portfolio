import React from "react"
import styled from "@emotion/styled"
import AniLink from "gatsby-plugin-transition-link/AniLink";

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
  `;

const Logo = styled.img`
  width: 36px;
  `;

const LinkStyles = {
  padding: '4px 8px',
  color: '#4db789',
};

const Header: React.FC = ({ children }) => {
    return (
        <Wrapper>
            <AniLink cover to="/#top" duration={0.75} bg="#4db789" direction="up"><Logo src="/img/logo.svg" alt="logo"/></AniLink>
            <Navigation>
            <AniLink cover to="/#profile" duration={0.75} bg="#4db789" direction="up" style={LinkStyles}>Profile</AniLink>
            <AniLink cover to="/#works" duration={0.75} bg="#4db789" direction="up" style={LinkStyles}>Works</AniLink>
            <AniLink cover to="/#hobby" duration={0.75} bg="#4db789" direction="up" style={LinkStyles}>Hobby</AniLink>
            <AniLink cover to="/#contact" duration={0.75} bg="#4db789" direction="up" style={LinkStyles}>Contact</AniLink>
            </Navigation>
        </Wrapper>
    )
}


export default Header
