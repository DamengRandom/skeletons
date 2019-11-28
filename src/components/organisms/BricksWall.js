import React from "react";
import styled from "styled-components";

import Text from "../atoms/Text";
import Bricks from "../molecules/Bricks";

const MansoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 960px;
`;

export default function BricksWall() {
  return (
    <MansoryContainer>
      <Text
        text="Bricks Wall Demo"
        css={`
          text-align: center;
          font-weight: bold;
          font-size: 1.4rem;
        `}
      />
      <Bricks />
    </MansoryContainer>
  );
}
