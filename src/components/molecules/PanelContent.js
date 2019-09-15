import React from "react";
import styled from "styled-components";
import AnimateHeight from "react-animate-height";

import { themeBorderPrimaryColor } from "../../styles/variables";
import Text from "../atoms/Text";
import LinkButton from "../atoms/LinkButton";

const PanelContentContainer = styled.div`
  border-bottom: 2px solid ${themeBorderPrimaryColor};
  border-top: 0;
`;

export default function PanalContent({
  imgUrl,
  words,
  buttonText,
  buttonUrl,
  isActive
}) {
  return (
    <PanelContentContainer>
      <AnimateHeight duration={400} height={isActive ? "auto" : 0}>
        <img src={imgUrl} alt="Accordion" />
        <Text text={words} />
        <LinkButton text={buttonText} url={buttonUrl} />
      </AnimateHeight>
    </PanelContentContainer>
  );
}
