import React from "react";
import styled from "styled-components";

import TabContent from "../molecules/TabContent";

const ContentContainer = styled.div`
  border: 1px solid;
`;

export default function TabContentWrapper({
  words,
  imgUrl,
  buttonText,
  buttonUrl,
  isActive
}) {
  return (
    <div>
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
    </div>
  );
}
