import React from "react";

import PanelHeader from "../molecules/PanelHeader";
import PanelContent from "../molecules/PanelContent";

export default function Accordion({
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
    <div>
      <PanelHeader
        title={title}
        onClick={() => {
          handleClick(index);
        }}
        isActive={isActive}
        index={index}
      />

      <PanelContent
        imgUrl={imgUrl}
        words={words}
        buttonText={buttonText}
        buttonUrl={buttonUrl}
        isActive={isActive}
      />
    </div>
  );
}
