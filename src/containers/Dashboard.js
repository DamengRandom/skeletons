import React, { useState } from "react";
import styled from "styled-components";

import Accordions from "../components/templates/Accordions";
import Tabs from "../components/templates/Tabs";
import ModalWrapper from "../components/organisms/ModalWrapper";

const DashboardContainer = styled.div`
  width: 100%;
  h3 {
    text-align: center;
  }
  & > div {
    max-width: 960px;
    margin: 0 auto;
  }
`;

export default function Dashboard() {
  const [toggleModal, setToggleModal] = useState(false);
  const handleClick = () => {
    setToggleModal(true);
  };

  return (
    <DashboardContainer>
      <h3>Dashboard</h3>
      <div>
        <hr />
        <h4>Accordion Skeleton</h4>
        <Accordions />
        <hr />
        <h4>Tab Skeleton</h4>
        <Tabs />
        <hr />
        <h4>Modal Skeleton</h4>
        <div>
          <button onClick={handleClick}>Open Modal</button>
          <ModalWrapper toggleModal={toggleModal} setToggleModal={setToggleModal} />
        </div>
      </div>
    </DashboardContainer>
  );
}
