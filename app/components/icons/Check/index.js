import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledCheckCircle = styled.svg`
  fill: ${ props => props.fill};
`
export default function CheckCircle({onClick, fill, ...props}) {
  return (
      <StyledCheckCircle
        { ...props }
        fill={fill}
        onClick={onClick}
        width="100%"
        viewBox="0 0 24 24"
      >
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
      </StyledCheckCircle>
  );
}

CheckCircle.PropTypes = {
  fill: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}
