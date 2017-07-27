import React from 'react';
import styled from 'utils/styled-components';
import ChevronLeft from 'components/icons/ChevronLeft';

const BackChevron = styled.div`
  position: absolute;
  display: flex;
  width: 80px;
  height: 80px;
  border-bottom-right-radius: 100%;
  background-color: ${props => props.secondary ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)'};
  opacity: 0.5
  transition: all 0.5s ease;
  z-index: 1;
  cursor: pointer;
  &:hover {
    opacity: 0.9
  }
  top: 0;
  left: 0;
`
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  width: 50%;
  height: 90%;
  & > svg {
    fill: ${props => props.secondary ? '#000' : '#FFF'};
  }
`

const BackButton = ({ secondary, onClick, ...props }) => (
  <BackChevron secondary={secondary} onClick={onClick}>
    <Icon secondary={secondary}>
      <ChevronLeft/>
    </Icon>
  </BackChevron>
)

export default BackButton;
