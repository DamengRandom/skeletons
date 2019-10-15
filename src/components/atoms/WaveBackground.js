import React from 'react';
import styled from "styled-components";

const DynamicWave = styled.div`
  background: #fff;
  width: 100%;
  height: 102.5px;
`;

const WaveContainer = styled.div`
  width: 100%;
  background-image: url('https://dummyimage.com/2560x1600/db2938/ffffff&text=Wave+Background+Demo');
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 50px;
  box-sizing: border-box;
  height: 512px;

  .inner-container {
    width: 100%;
    position: absolute;
    bottom: -6px;
    overflow: hidden;
  }

  .inner-container svg {
    width: 200%;
    position: relative;
    animation: move-left 5s linear infinite; 
  }

  @keyframes move-left {
    0%{
      left: 0%;
    }
    100%{
      left: -100%;
    }
  }

  .following-contents {
    padding: 0 24px;
  }
`;

export default function WaveBackground() {
  return (
    <>
      <WaveContainer>
        <div className="inner-container">
          <svg
            x="0px"
            y="0px"
            viewBox="0 0 3841 108.5"
            style={{ overflow: "scroll", enableBackground: "new 0 0 2841 108.5"}}>
            <defs></defs>
            <path
              style={{fill: "#fff", strokeMiterlimit: "10" }}
              d="M3360.5,97.739c-242,0-480-48.375-480-48.375
              S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864s-480-48.375-480-48.375S727.5,0.5,480.5,0.5
              S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z"
            />
          </svg>
        </div>
      </WaveContainer>
      <DynamicWave />
    </>
  )
}
