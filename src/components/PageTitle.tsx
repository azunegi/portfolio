import React from "react"
import styled from "@emotion/styled"

const ContentTitle = styled.h1`
  position: relative;
  overflow: hidden;
  width: 100%;
  margin-bottom: 40px;
  text-align: center;
  font-size: 3.6rem;
  font-family: "Ubuntu";
  color: #424242;
`;

export const Contents: React.FC = ({ children }) => (
    <ContentTitle>{children}</ContentTitle>
);

export default Contents;
