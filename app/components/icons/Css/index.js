import React from 'react';
import PropTypes from 'prop-types';
import styled from 'utils/styled-components';

const StyledSVG = styled.svg`
  fill: #47848f;
  stroke: #47848f;
  stroke-width: 1px;
`;
export default function Css({ onClick }) {
  return (
    <StyledSVG
      onClick={onClick}
      width="100%"
      height="100%"
      viewBox="85.5 210.272 437.29 491.728"
      enable-background="new 85.5 210.272 437.29 491.728"
    >
      <polygon
        fill="#1572B6"
        points="128.668,652.845 89.21,210.272 522.79,210.272 483.29,652.775 305.735,702 "
      />
      <polygon
        fill="#33A9DC"
        points="306,664.375 449.474,624.599 483.229,246.459 306,246.459 "
      />
      <path
        fill="#FFFFFF"
        d="M167.739,293.569l-0.308,54.766H390.34l-0.08,35.375H167.203l-0.161,54.766h222.909l-0.293,62.462  l-84.061,29.75l-83.639-29.75l0.063-27.087h-54.765l-0.251,65.719l138.353,49.289l138.877-49.289l0.467-98.873l0.141-19.834  l0.568-127.292L167.739,293.569L167.739,293.569z"
      />
    </StyledSVG>
  );
}

Css.propTypes = {
  onClick: PropTypes.func,
};
