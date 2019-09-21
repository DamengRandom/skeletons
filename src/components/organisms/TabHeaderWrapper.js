import React from "react";
import styled from "styled-components";

import TabHeader from "../molecules/TabHeader";
import { themePrimaryColor } from "../../styles/variables";

const headerCss = `
  color: ${themePrimaryColor};
`;

const TabContainer = styled.div``;

export default function TabHeaderWrapper({
  title,
  isActive,
  handleClick,
  index
}) {
  return (
    <TabContainer>
      <TabHeader
        title={title}
        css={headerCss}
        onClick={() => {
          handleClick(index);
        }}
        isActive={isActive}
        index={index}
      />
    </TabContainer>
  );
}
