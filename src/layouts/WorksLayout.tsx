import React from "react";
import styled from "@emotion/styled";
import Header from "@/components/Works/Header";
import ParticlesBg from "particles-bg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  min-height: 100vh;
  padding-top: 50px;
  z-index: 1;
`;

const PrticleBgWrapper = styled.div`
  width:100vw;
  height:100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 0;
`;

export const Layout: React.FC = ({ children }) => (
  <Container>
    <Header />
    <Wrapper>
      {children}
    </Wrapper>
    <PrticleBgWrapper>
      <ParticlesBg type="cobweb" color="#4db789" bg={true}/>
    </PrticleBgWrapper>
  </Container>
);

export default Layout;
