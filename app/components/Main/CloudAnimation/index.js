import React from 'react';
import styled , { keyframes } from 'utils/styled-components';
import CloudComponent from 'components/icons/Cloud';
import CloudSVG from 'components/icons/Cloud/vector.svg';

const positionTransition1 = keyframes`
  0% {background-position: -10%  20%; }
  100% {background-position: 120%  20%; }
`
const positionTransition2 = keyframes`
  0% {background-position: -30%  70%; }
  100% {background-position: 140%  70%; }
`
const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: -1;
  background-position: center;
  background-size: cover;
  background-color: #00bffd;
  opacity: 0.1;
  ${'' /* animation: ${bgTransition} 2s infinite; */}
  animation-timing-function: linear;
`;
const Cloud = styled.div`
  background: url(${CloudSVG});
  position: absolute;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
`
const Cloud1 = styled(Cloud)`
  animation: ${positionTransition1} 9s infinite;
  animation-timing-function: linear;
  background-size: 10% ;
`
const Cloud2 = styled(Cloud)`
  animation: ${positionTransition2} 5s infinite;
  animation-timing-function: linear;
  background-size: 20% ;
`

const CloudAnimation = ({ ...props }) => (
  <Wrapper>
    <Cloud1 />
    <Cloud2 />
  </Wrapper>
)

export default CloudAnimation;
