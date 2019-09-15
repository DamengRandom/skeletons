import React from "react";
import styled from "styled-components";

import { themeLightColor } from "../../styles/variables";

const ModalBox = styled.div`
  width: 400px;
  height: 400px;
  background-color: ${themeLightColor};
`;

export default function Modal({ setToggleModal, children }) {
  return (
    <ModalBox>
      <button onClick={() => {
        setToggleModal(false);
      }}>&#10005;</button>
      {children}
    </ModalBox>
  );
}
