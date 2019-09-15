import React from "react";
import styled from "styled-components";

import { themePrimaryColor } from "../../styles/variables";

const HeaderContainer = styled.div`
  text-align: center;
  padding: 0 1rem;
  cursor: pointer;
  ${props =>
    props.isActive
      ? `border-bottom: 4px solid ${themePrimaryColor};`
      : "border-bottom: none;"}
  ${props => (props.index === 0 ? "padding-left: 0" : "")}
  ${props => props.css};

  h5 {
    margin: 0.5rem;
  }
`;

export default function TabHeader({ title, css, onClick, isActive, index }) {
  return (
    <HeaderContainer
      css={css}
      onClick={onClick}
      isActive={isActive}
      index={index}
    >
      <h5>{title}</h5>
    </HeaderContainer>
  );
}
