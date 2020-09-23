import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  font-size: 1.2rem;
;`;

export default () => (
  <Footer>
    © Azuki All rights reserved.
  </Footer>
);
