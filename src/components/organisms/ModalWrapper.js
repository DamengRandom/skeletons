import React from "react";
import { CSSTransition } from "react-transition-group";
import styled, { keyframes } from "styled-components";

import Modal from "../molecules/Modal";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  animation: ${props => (props.toggleModal ? fadeIn : fadeOut)} 0.2s linear;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

export default function ModalWrapper({ toggleModal, setToggleModal }) {
  return (
    <CSSTransition in={toggleModal} timeout={150} unmountOnExit>
      <ModalContainer toggleModal={toggleModal}>
        <div>
          <Modal setToggleModal={setToggleModal} toggleModal={toggleModal}>
            <p>Modal Content !!</p>
          </Modal>
        </div>
      </ModalContainer>
    </CSSTransition>
  );
}
