import React from "react"
import styled from "@emotion/styled"

const ImageList = styled.ul`
  &.imageList {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 120px;

    @media screen and (max-width: 1024px) {
      width: calc(100% - 6vw);
      margin: 0 3vw 120px 3vw;
    }

    & > li {
      width:calc(100% / 2 - 10px);
      border: solid 2px #b1b1b1;

      &:nth-of-type(2n+2) {
        margin-left: 20px;
      }
      &:nth-of-type(n+3) {
        margin-top: 20px;
      }
  
      @media screen and (max-width: 768px) {
        width: 100%;
        margin: 0;
  
        &:nth-of-type(2n+2) {
          margin-left: 0;
        }
        &:nth-of-type(n+2) {
          margin-top: 20px;
        }
    }
  }
`;

export const Contents: React.FC = ({ children }) => (
    <ImageList className="imageList">
        {children}
    </ImageList>
);

export default Contents;
