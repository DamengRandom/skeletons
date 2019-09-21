import React from 'react';
import styled from "styled-components";

const PreContainer = styled.pre`
  background: black;
  color: white;
  font-size: 16px;
  padding: 6px;
  padding-top: 0;
  &:before {
    display: block;
    width: calc(100%);
    padding: 6px;
    margin-left: -6px;
    text-transform: uppercase;
    content: attr(data-lang);
    background: #db2938;
    color: white;
  }
`;

const CodeBlock = ({ dataLang, children }) => (
  <PreContainer data-lang={dataLang}>{children}</PreContainer>
);

export default CodeBlock;
