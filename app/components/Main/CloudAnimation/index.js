import React from 'react';
import styled, { keyframes } from 'utils/styled-components';
import media from 'utils/media';
import FirstCloudSVG from 'components/icons/Cloud/firstCloud.svg';
import SecondCloudSVG from 'components/icons/Cloud/secondCloud.svg';
import ThirdCloudSVG from 'components/icons/Cloud/thirdCloud.svg';
import ForthCloudSVG from 'components/icons/Cloud/forthCloud.svg';

const row1Duration = '10s';
const row2Duration = '14s';
const row3Duration = '14s';
const row4Duration = '16s';

const transition = keyframes`
  0% {background-position-x: 0}
  100% {background-position-x: 200%}
`
const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: -1;
  background-position: center;
  background-size: cover;
  background-color: #00bffd;
  opacity: 0.15;
  animation-timing-function: linear;
  ${media.tablet`
    & * {
      display: none;
    }
  `}
`;
const Cloud = styled.div`
  animation: ${transition} 2s linear infinite;
  position: absolute;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
`
const CloudRow1 = styled(Cloud)`
  background: url(${FirstCloudSVG}) repeat-x;
  background-position-y: 90%;
  background-size: 66.6%;
  animation-duration: ${row1Duration};
`
const CloudRow2 = styled(Cloud)`
  background: url(${SecondCloudSVG}) repeat-x;
  background-position-y: 45%;
  background-size: 40%;
  animation-duration: ${row2Duration};
`
const CloudRow3 = styled(Cloud)`
  background: url(${ThirdCloudSVG}) repeat-x;
  background-position-y: 20%;
  background-size: 28.5%;
  animation-duration: ${row3Duration};
`
const CloudRow4 = styled(Cloud)`
  background: url(${ForthCloudSVG}) repeat-x;
  background-position-y: 5%;
  background-size: 20%;
  animation-duration: ${row4Duration};
`

const CloudAnimation = ({ ...props }) => (
  <Wrapper>
    <CloudRow1/>
    <CloudRow2/>
    <CloudRow3/>
    <CloudRow4/>
  </Wrapper>
)

export default CloudAnimation;
