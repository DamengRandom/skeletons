import React from "react";
import styled from "styled-components";

import Text from "../atoms/Text";
import Button from "../atoms/Button";

const InformationBoardContainer = styled.div`
  padding: 60px;
  background-color: ${props => (props.bg ? props.bg : "#db2938")};
  color: ${props => (props.bg ? props.word : "#fff")};
  text-align: center;
`;

export default function InformationBoard({ wordColor, bgColor }) {
  return (
    <InformationBoardContainer bg={bgColor} word={wordColor}>
      <Text
        text="Heading content (The heading content could be very long)"
        css={`
          font-size: 2.4rem;
          color: white;
          text-align: center;
        `}
      />
      <Text
        text="subheading text content (could be a bit shorter)"
        css={`
          font-size: 1.2rem;
          color: white;
          font-style: italic;
          text-align: center;
        `}
      />
      <Button
        type="button"
        name="checkout"
        text="Check it out"
        css={`
          font-size: 1.2rem;
          margin: 48px 0;
        `}
      />
    </InformationBoardContainer>
  );
}
