import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledEmail = styled.svg`
  fill: ${ props => props.fill};
`
export default function Email({onClick, fill, ...props}) {
  return (
      <StyledEmail
        { ...props }
        fill={fill}
        onClick={onClick}
        width="100%"
        viewBox="0 0 230 230"
      >
        <path d="M230,49.585c0-0.263,0.181-0.519,0.169-0.779l-70.24,67.68l70.156,65.518c0.041-0.468-0.085-0.94-0.085-1.418V49.585z"/>
        <path d="M149.207,126.901l-28.674,27.588c-1.451,1.396-3.325,2.096-5.2,2.096c-1.836,0-3.672-0.67-5.113-2.013l-28.596-26.647   L11.01,195.989c1.717,0.617,3.56,1.096,5.49,1.096h197.667c2.866,0,5.554-0.873,7.891-2.175L149.207,126.901z"/>
        <path d="M115.251,138.757L222.447,35.496c-2.427-1.443-5.252-2.411-8.28-2.411H16.5c-3.943,0-7.556,1.531-10.37,3.866   L115.251,138.757z"/>
        <path d="M0,52.1v128.484c0,1.475,0.339,2.897,0.707,4.256l69.738-67.156L0,52.1z"/>
      </StyledEmail>
  );
}

Email.defaultProps = {
  fill: '#FFF',
}
Email.PropTypes = {
  fill: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}
