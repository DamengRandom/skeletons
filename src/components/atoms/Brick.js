import React from "react";
import styled from "styled-components";

const BrickContainer = styled.div`
  border: 2px solid #${props => (props.color === "ffffff" ? "db2938" : props.color)};
  min-width: 240px;
  flex: 1;
  margin: 6px;
  cursor: pointer;

  &:hover {
    background-color: #db2938;

    h4,
    p {
      color: #fff;
    }
  }

  & > div {
    padding: 12px;

    h4 {
      font-weight: bold;
      font-size: 1.2rem;
      margin-bottom: 0;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;

export default function Brick({ brick, brickColor }) {
  const { title, body } = brick;
  return (
    <BrickContainer color={brickColor}>
      <div>
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    </BrickContainer>
  );
}
