import React from "react";
import styled from "styled-components";

const TextContainer = styled.p`
  ${props => props.css}
`;

export default function Text({ text, css }) {
  return <TextContainer css={css}>{text}</TextContainer>;
}
