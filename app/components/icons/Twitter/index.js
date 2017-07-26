import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledTwitter = styled.svg`
  fill: ${ props => props.fill};
`
export default function Twitter({onClick, fill, ...props}) {
  return (
      <StyledTwitter
        { ...props }
        fill={fill}
        onClick={onClick}
        width="100%"
        viewBox="0 0 1792 1792"
      >
        <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"/>
      </StyledTwitter>
  );
}

Twitter.defaultProps = {
  fill: '#FFF',
}
Twitter.PropTypes = {
  fill: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}
