import React from "react";
import styled from "styled-components";

import { themePrimaryColor, themeLightColor } from "../../styles/variables";

const ButtonBox = styled.a`
  text-decoration: none;
  button {
    outline: none;
    background-color: ${themePrimaryColor};
    color: ${themeLightColor};
    padding: 0.4rem 1rem;
    width: 100%;
    border: none;
  }
`;

export default function LinkButton({ text, url }) {
  return (
    <ButtonBox href={url} rel="noopener noreferrer" target="_blank">
      <button>{text}</button>
    </ButtonBox>
  );
}
