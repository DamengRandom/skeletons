import React, { useState } from "react";
import styled from "styled-components";

import Accordions from "../components/templates/Accordions";
import MultiAccordions from "../components/templates/MultiAccordions";
import Tabs from "../components/templates/Tabs";
import ModalWrapper from "../components/organisms/ModalWrapper";
import CodeBlockDemo from "../components/templates/CodeBlockDemo";
import HooksDemo from "./HooksDemo";
import WaveBackground from "../components/atoms/WaveBackground";
import SimpleForm from "../components/templates/SimpleForm";
import NavMenu from "../components/molecules/NavMenu";
import BricksWall from "../components/organisms/BricksWall";
import InformationBoard from "../components/organisms/InformationBoard";
import Pagination from "../components/templates/Pagination";

import { DemoDataProvider } from "../contexts/contextDemo";
import ContextAPIDemo from "./ContextAPIDemo";
import ContextConsumer from "./ContextConsumer";

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
    <DemoDataProvider>
      <>
        <NavMenu title="Dashboard" linksScrollable={false} />
        <DashboardContainer>
          <WaveBackground />
          <div>
            <hr />
            <h4>Accordion Skeleton</h4>
            <Accordions />
            <hr />
            <h4>Multi Accordion Skeleton</h4>
            <MultiAccordions />
            <hr />
            <h4>Tab Skeleton</h4>
            <Tabs />
            <hr />
            <h4>Modal Skeleton</h4>
            <div>
              <button onClick={handleClick}>Open Modal</button>
              <ModalWrapper
                toggleModal={toggleModal}
                setToggleModal={setToggleModal}
              />
            </div>
            <hr />
            <h4>Modal Skeleton</h4>
            <div>
              <CodeBlockDemo />
            </div>
            <hr />
            <h4>Custom Hooks Skeleton</h4>
            <div>
              <HooksDemo />
            </div>
            <h4>Simple Form Skeleton</h4>
            <div>
              <SimpleForm />
            </div>
            <h4>Context API Demo Skeleton</h4>
            <div>
              <ContextAPIDemo />
              <ContextConsumer />
            </div>
            <h4>InformationBoard Skeleton</h4>
            <div>
              <InformationBoard />
            </div>
            <h4>BricksWall Skeleton</h4>
            <div>
              <BricksWall />
            </div>
            <h4>Pagination Skeleton</h4>
            <div>
              <Pagination />
            </div>
          </div>
        </DashboardContainer>
      </>
    </DemoDataProvider>
  );
}
