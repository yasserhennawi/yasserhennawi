import React from 'react';
import styled from 'styled-components';

const StyledSVG = styled.svg`
   fill: #FFF;
   stroke-width: 14;
`
export default function ReactIcon({onClick, ...props}) {
  return (
    <StyledSVG onClick={onClick} width="100%" viewBox="0 0 500 500" enable-background="new 0 0 500 500" stroke="#53C1DE" stroke-width="20">
      <ellipse transform="matrix(-0.866 -0.5 0.5 -0.866 342.1488 591.3323)" fill="none" stroke="#53C1DE" cx="250.3" cy="249.8" rx="81.7" ry="212.7"/>
      <ellipse fill="none" stroke="#53C1DE" cx="250.3" cy="250" rx="212.7" ry="81.7"/>
      <ellipse transform="matrix(0.866 -0.5 0.5 0.866 -91.3715 158.6236)" fill="none" stroke="#53C1DE" cx="250.3" cy="249.8" rx="81.7" ry="212.7"/>
      <path fill="#53C1DE" d="M250.1,207.3c23.9,0,43.2,19.3,43.2,43.2c0,23.9-19.3,43.2-43.2,43.2c-23.9,0-43.2-19.3-43.2-43.2
      C206.9,226.6,226.3,207.3,250.1,207.3"/>
    </StyledSVG>
  );
}
