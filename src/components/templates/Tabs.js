import React, { useState } from "react";
import styled from "styled-components";

import TabHeaderWrapper from "../organisms/TabHeaderWrapper";
import TabContentWrapper from "../organisms/TabContentWrapper";

const TabHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TabContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const tabsData = [
  {
    title: "eum et est occaecati",
    words:
      "React ships with a whole bunch of hooks that can be a bit tough to grasp when you're learning them all at once. This post should help you understand the differences and use-cases of three of them.React ships with a whole bunch of hooks that can be a bit tough to grasp when you're learning them all at once. This post should help you understand the differences and use-cases of three of them.React ships with a whole bunch of hooks that can be a bit tough to grasp when you're learning them all at once. This post should help you understand the differences and use-cases of three of them.",
    imgUrl: "https://via.placeholder.com/150/771796",
    buttonText: "Find out more",
    buttonUrl: "https://scotch.io/tutorials/using-sass-in-create-react-app-v2"
  },
  {
    title: "React ships with",
    words:
      "What is the difference between useCallBack and useMemo? And why do useMemo and useCallback expect a function? If you’ve worked with React Hooks, you might have asked yourself these questions.",
    imgUrl: "https://via.placeholder.com/150/f66b97",
    buttonText: "Find out more",
    buttonUrl:
      "https://dev.to/devcord/react-hooks-useeffect-usecallback-usememo-3o42"
  },
  {
    title: "React App will know to",
    words:
      "The ~ let's webpack and Create React App know to look in the node_modules/ folder for the files we need. Let's add a few of the files we need to our app:",
    imgUrl: "https://via.placeholder.com/150/24f355",
    buttonText: "Find out more",
    buttonUrl:
      "https://medium.com/@jan.hesters/usecallback-vs-usememo-c23ad1dc60"
  }
];

export default function Tabs() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = index => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <>
      <TabHeaderContainer>
        {tabsData.map(
          ({ title }, index) => (
            <TabHeaderWrapper
              key={`tab-${index}`}
              title={title}
              isActive={activeIndex === index}
              handleClick={handleClick}
              index={index}
            />
          )
        )}
      </TabHeaderContainer>
      <TabContentContainer>
        {tabsData.map(
          ({ words, imgUrl, buttonText, buttonUrl }, index) => (
            <TabContentWrapper
              key={`tab-${index}`}
              words={words}
              imgUrl={imgUrl}
              buttonText={buttonText}
              buttonUrl={buttonUrl}
              isActive={activeIndex === index}
              handleClick={handleClick}
              index={index}
            />
          )
        )}
      </TabContentContainer>
    </>
  );
}
