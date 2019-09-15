import React from "react";

import Text from "../atoms/Text";
import LinkButton from "../atoms/LinkButton";

export default function TabContent({ words, imgUrl, buttonText, buttonUrl }) {
  return (
    <div>
      <img src={imgUrl} alt="Tab" />
      <Text text={words} />
      <LinkButton text={buttonText} url={buttonUrl} />
    </div>
  );
}
