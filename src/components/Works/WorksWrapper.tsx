import React from "react"
import styled from "@emotion/styled"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px 0;
  background: #ffffff;

  & > h2 {
    display:flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
    font-family: "Noto Sans JP";
    font-size: 2.4rem;
  }

  & > p {
    width: 100%;
    margin-bottom:20px;
    text-align: center;
    font-size: 1.6rem;
    line-height: 1.5;

    @media screen and (max-width: 1024px) {
      width: calc(100% - 6vw);
      margin: 0 3vw 20px 3vw;
    }
  }
`;

export const Contents: React.FC = ({ children }) => (
    <Wrapper>
        {children}
    </Wrapper>
);

export default Contents;
