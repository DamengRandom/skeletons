import React from "react";
import styled from "styled-components";

const UlContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;

  ${props =>
    props.scrollable
      ? `
        overflow: auto;
        ::-webkit-scrollbar {
          display: none;
        }
        white-space: nowrap;

        li {
          cursor: pointer;
          padding: 0 12px;

          p:after {
            content: "";
            display: block;
            width: 0;
            height: 2px;
            background: #000;
            transition: width 0.5s;
          }

          p:hover::after {
            width: 100%;
          }
        }

        li:first-child {
          padding-left: ${(props.totalLinks + 1) * 12}px;
        }
      `
      : `
        li {
          cursor: pointer;
          padding: 0 12px;
          flex-grow: 1;
        }
        `}

  @media screen and (max-width: 768px) {
    ${props =>
      props.scrollable
        ? `
          width: 100%;
          overflow: auto;
          ::-webkit-scrollbar {
            display: none;
          }
          white-space: nowrap;
          justify-content: center;

          li > p {
            text-align: center;
          };
        `
        : `
          flex-wrap: wrap;

          li > p {
            text-align: center;
          };
        `}
  }
`;

const defaultLinks = [
  {
    text: "Link One",
    url: "/linkOne"
  },
  {
    text: "Fake Link",
    url: "/fakeLink"
  },
  {
    text: "Test Link",
    url: "/testLink"
  },
  {
    text: "TheSampleLink",
    url: "/theSampleLink"
  },
  {
    text: "Test",
    url: "/test"
  }
];

export default function NavLinks({ links = defaultLinks, linksScrollable }) {
  return (
    <UlContainer scrollable={linksScrollable} totalLinks={links.length}>
      {links.map(link => (
        <li key={link.url}>
          <p>{link.text}</p>
        </li>
      ))}
    </UlContainer>
  );
}
