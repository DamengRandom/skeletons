import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  padding: 6px 12px;
  color: ${props => (props.withBg ? "#fff" : "#db2938")};
  background-color: ${props => (props.withBg ? "#db2938" : "#fff")};
  ${props => props.css}
`;

export default function Button({
  type,
  onClick,
  onBlur,
  name,
  text,
  css,
  withBg
}) {
  return (
    <ButtonWrapper
      type={type}
      name={name}
      onClick={onClick}
      onBlur={onBlur}
      css={css}
      withBg={withBg}
    >
      {text}
    </ButtonWrapper>
  );
}
