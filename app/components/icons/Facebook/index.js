import React from 'react';
import PropTypes from 'prop-types';
import styled from 'utils/styled-components'

const StyledFacebook = styled.svg`
  fill: ${ props => props.fill};
`
export default function Facebook({onClick, fill, ...props}) {
  return (
      <StyledFacebook
        { ...props }
        fill={fill}
        onClick={onClick}
        width="100%"
        viewBox="0 0 1792 1792"
      >
        <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"/>
      </StyledFacebook>
  );
}

Facebook.PropTypes = {
  fill: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}
