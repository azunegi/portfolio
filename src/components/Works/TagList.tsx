import React from "react"
import styled from "@emotion/styled"

const TagList = styled.ul`
  &.tagList {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 10px 20px 20px 20px;
    margin-bottom: 40px;
    border: solid 2px #b1b1b1;
    border-radius: 3px;

    @media screen and (max-width: 1024px) {
      width: calc(100% - 6vw);
      margin: 0 3vw 40px 3vw;
    }

    & > li {
      padding: 5px 15px;
      margin: 10px 5px 0 0;
      font-size: 1.4rem;
      color: #ffffff;
      border-radius: 15px;
      background: #4db789;
    }
  }
`;

export const Contents: React.FC = ({ children }) => (
    <TagList className="tagList">
        {children}
    </TagList>
);

export default Contents;
