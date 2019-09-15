import React from "react";
import styled from "styled-components";

import { themeBorderPrimaryColor } from "../../styles/variables";
import Icon from "../atoms/Icon";
import Text from "../atoms/Text";

const PanelHeaderContainer = styled.div`
  cursor: pointer;
  ${props =>
    props.index === 0 &&
    `
      &>div:first-of-type {
        border-top: 2px solid ${themeBorderPrimaryColor};
      }
  `}

  &>div {
    display: flex;
    align-items: center;
    p {
      padding-left: 12px;
    }
  }
`;

export default function PanelHeader({ title, onClick, isActive, index }) {
  return (
    <PanelHeaderContainer index={index}>
      <div onClick={onClick}>
        <Icon iconClass={isActive ? "fa fa-minus" : "fa fa-plus"} />
        <Text text={title} />
      </div>
    </PanelHeaderContainer>
  );
}
