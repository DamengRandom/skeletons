import React from "react";
import styled from "styled-components";

import TabHeader from "../molecules/TabHeader";
import TabContent from "../molecules/TabContent";
import { themePrimaryColor } from "../../styles/variables";

const headerCss = `
  color: ${themePrimaryColor};
`;

const TabContainer = styled.div``;

const ContentContainer = styled.div`
  position: absolute;
  top: 40px;
  left: 0px;
  border: 1px solid;
`;

export default function Tab({
  title,
  words,
  imgUrl,
  buttonText,
  buttonUrl,
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

      {isActive && (
        <ContentContainer>
          <TabContent
            words={words}
            imgUrl={imgUrl}
            buttonText={buttonText}
            buttonUrl={buttonUrl}
          />
        </ContentContainer>
      )}
    </TabContainer>
  );
}
