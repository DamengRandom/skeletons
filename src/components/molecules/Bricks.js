import React from "react";
import styled from "styled-components";

import { useFetch } from "../../utils/hooks/useFetch";
import Brick from "../atoms/Brick";

const BricksContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: auto;
  margin: 0 -6px;
`;

export default function Bricks() {
  const { data: bricks } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const colorExceptWhite = () => {
    return (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
  };

  return (
    <BricksContainer>
      {bricks
        ? bricks
            .slice(0, 10)
            .map((eachBrick, index) => (
              <Brick
                key={`brick-${index}`}
                brick={eachBrick}
                brickColor={colorExceptWhite()}
              />
            ))
        : null}
    </BricksContainer>
  );
}
