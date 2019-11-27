import React from "react";
import styled from "styled-components";

import { themeBorderPrimaryColor } from "../../styles/variables";
import Text from "../atoms/Text";
import NavLinks from "../atoms/NavLinks";

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${themeBorderPrimaryColor};
  margin-bottom: 40px;

  nav {
    max-width: 960px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${props => props.css}

  @media screen and (max-width: 768px) {
    nav {
      flex-direction: column;
    }
  }
`;

export default function NavMenu({ title, links, css, linksScrollable }) {
  return (
    <NavContainer css={css} linksScrollable={linksScrollable}>
      <nav>
        <Text
          text={title}
          css={`
            font-size: 16pt;
            font-weight: bold;
            cursor: pointer;
            @media screen and (max-width: 768px) {
              margin-bottom: 0px;
            }
          `}
        />
        <NavLinks links={links} linksScrollable={linksScrollable} />
      </nav>
    </NavContainer>
  );
}
