import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  ${'' /* background: ${transparent}; */}
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  transition: background-color 0.5s ease,
              color 0.5s ease;
  &:hover {
    background: ${(props) => props.color};
    color: ${(props) => props.activeColor || props.inverseColor};
  }
  outline: none;
`;

const PrimaryButton = styled(Button)`
`;

const SecondaryButton = styled(Button)`
`;

export default ({ secondary, activeColor, ...props }) => {
  if(secondary) {
    return <SecondaryButton color='rgba(0,0,0,0.75)' inverseColor='#FFF' activeColor={activeColor} {...props} />
  }
  return <PrimaryButton color='#FFF' inverseColor='rgba(0,0,0,0.75)' activeColor={activeColor} {...props} />
}
