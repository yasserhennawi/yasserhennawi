import React from 'react';
import PropTypes from 'prop-types';

export default function Illustrator({ onClick, fill, ...props }) {
  return (
    <svg
      {...props}
      fill={fill}
      onClick={onClick}
      width="100%"
      viewBox="0 0 240 234"
    >
      <rect
        x="10"
        y="10"
        style={{ fillRule: 'evenodd', clipRule: 'evenodd', fill: '#261300' }}
        width="220"
        height="213.999"
      />
      <path
        style={{ fillRule: 'evenodd', clipRule: 'evenodd', fill: '#FF7C00' }}
        d="M0,0V234h240.001V0H0z M10,10h220.001V224H10V10z"
      />
      <path
        style={{ fillRule: 'evenodd', clipRule: 'evenodd', fill: '#FF7C00' }}
        d="M83.252,132.501l-7.92,29.982 c-0.165,0.824-0.495,1.018-1.485,1.018H59.16c-0.988,0-1.152-0.33-0.988-1.485l28.38-99.448c0.495-1.815,0.825-3.377,0.99-8.328 c0-0.66,0.33-0.99,0.825-0.99h20.955c0.66,0,0.99,0.165,1.155,0.99l31.845,107.94c0.165,0.824,0,1.32-0.825,1.32h-16.5 c-0.824,0-1.319-0.193-1.484-0.854l-8.25-30.146H83.252z M111.137,116.251c-2.805-11.056-9.405-35.286-11.88-47h-0.165 c-2.146,11.715-7.425,31.49-11.55,47H111.137z M156.13,60.673c0-6.435,4.455-10.23,10.23-10.23c6.105,0,10.23,4.125,10.23,10.23 c0,6.6-4.29,10.23-10.395,10.23C160.255,70.903,156.13,67.273,156.13,60.673z M157.25,83.405c0-0.825,0.33-1.155,1.155-1.155h15.689 c0.825,0,1.155,0.33,1.155,1.155v78.939c0,0.826-0.165,1.156-1.155,1.156H158.57c-0.99,0-1.32-0.496-1.32-1.32V83.405z"
      />
    </svg>
  );
}

Illustrator.propTypes = {
  fill: PropTypes.string,
  onClick: PropTypes.func,
};
