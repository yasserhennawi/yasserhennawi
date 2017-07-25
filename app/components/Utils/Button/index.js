import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  transition: all 0.5s ease;
  &:hover {
    background: ${(props) => props.color};
    color: ${(props) => props.activeColor || props.inverseColor}
    border: 1px solid rgba(0,0,0,0);
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
