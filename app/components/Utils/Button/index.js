import React from 'react';
import PropTypes from 'prop-types';
import styled from 'utils/styled-components';
import colors from 'theme/color';

const StyledButton = styled.button`
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

const Button = ({ secondary, activeColor, ...props }) =>
  secondary ? (
    <StyledButton
      color={colors.shadow2}
      inverseColor={colors.white}
      activeColor={activeColor}
      {...props}
    />
  ) : (
    <StyledButton
      color={colors.white}
      inverseColor={colors.shadow2}
      activeColor={activeColor}
      {...props}
    />
  );

Button.propTypes = {
  secondary: PropTypes.bool,
  activeColor: PropTypes.string,
};

export default Button;
