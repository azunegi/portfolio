import React from "react";
import styled from "@emotion/styled";

const CardList = styled.ul`
  &.cardList {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  
    @media screen and (max-width: 1024px) {
      width: calc(100% - 6vw);
      margin: 0 3vw;
    }
  
    & > li {
      width: calc(100% / 2 - 10px);
  
      &:nth-of-type(2n+2) {
        margin-left: 20px;
      }
      &:nth-of-type(n+3) {
        margin-top: 40px;
      }
  
      @media screen and (max-width: 768px) {
        width: 100%;
        margin: 0;
  
        &:nth-of-type(2n+2) {
          margin-left: 0;
        }
        &:nth-of-type(n+2) {
          margin-top: 40px;
        }
      }
  
      & .image {
        width: 100%;
        overflow: hidden;
        border: solid 3px #b1b1b1;
        border-radius: 6px;
        transition: all 0.3s;
  
        &:hover {
          transform: scale(1.05);
          opacity: 0.8;
          transition: all 0.3s;
        }
      }
  
      & > b {
        display: flex;
        justify-content: center;
        margin-top: 16px;
        font-size: 1.8rem;
        font-family: "Ubuntu";
      }
    }
  }
`;

export const Contents: React.FC = ({ children }) => (
    <CardList className="cardList">
        {children}
    </CardList>
);

export default Contents;
