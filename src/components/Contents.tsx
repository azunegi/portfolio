import React from "react"
import styled from "@emotion/styled"

const Wrapper = styled.div`
display: flex;
justify-content: center;
position: relative;
width: 100%;
min-height: calc(100vh - 50px);
`;

const Cards = styled.div`
display: flex;
justify-content: center;
align-content: flex-start;
align-items: flex-start;
flex-wrap: wrap;
position: relative;
width: 1024px;
padding: 70px 0 120px 0;

@media screen and (max-width: 1024px) {
  width: 100%;
}`;

export const Contents: React.FC = ({ children }) => (
    <Wrapper>
      <Cards>
        {children}
      </Cards>
    </Wrapper>
);

export default Contents;
