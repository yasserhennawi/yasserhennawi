import React from 'react';
import styled from 'styled-components';

const gradientColor = `rgba(255,255,255,1), rgba(255,255,255,0.5), rgba(255,255,255,0.25), rgba(255,255,255,0)`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: ${ props => props.bgColor };
  width: ${ props => props.width};
  height: ${ props => props.width};
  border-radius: 100%;
`
const LogoLayer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const NameLayer = styled.h5`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${ props => props.width};
  height: ${ props => props.width};
  box-sizing: border-box;
  color: rgba(0,0,0,0.75);
  font-weight: 500;
  background: -webkit-radial-gradient( ${gradientColor} );
  background: -o-radial-gradient( ${gradientColor} );
  background: -moz-radial-gradient( ${gradientColor} );
  background: radial-gradient( ${gradientColor} );
  border-radius: 100%;
  transition: all 0.5s ease;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
  position: absolute;
`
const Tool = ({ bgColor, width, logo, name, ...props }) => (
  <Wrapper bgColor={bgColor} width={width} { ...props } >
    <NameLayer width={width}>{name}</NameLayer>
    <LogoLayer>{logo}</LogoLayer>
  </Wrapper>
)
export default Tool;
