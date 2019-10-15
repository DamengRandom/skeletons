import React, { useState } from "react";

import PanelHeader from "../molecules/PanelHeader";
import PanelContent from "../molecules/PanelContent";

export default function MutiAccordion({
  title,
  words,
  imgUrl,
  buttonText,
  buttonUrl,
}) {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <PanelHeader
        title={title}
        onClick={() => {
          setToggle(!toggle);
        }}
        isActive={toggle}
      />

      <PanelContent
        imgUrl={imgUrl}
        words={words}
        buttonText={buttonText}
        buttonUrl={buttonUrl}
        isActive={toggle}
      />
    </div>
  );
}
