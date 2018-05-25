import React from 'react';
import PropTypes from 'prop-types';
import styled from 'utils/styled-components';
import ChevronLeft from 'components/icons/ChevronLeft';
import colors from 'theme/color';

const BackChevron = styled.div`
  position: absolute;
  display: flex;
  width: 80px;
  height: 80px;
  border-bottom-right-radius: 100%;
  background-color: ${(props) =>
    props.secondary ? colors.grey1 : colors.shadow1};
  opacity: 0.5
  transition: all 0.5s ease;
  z-index: 1;
  cursor: pointer;
  &:hover {
    opacity: 0.9
  }
  top: 0;
  left: 0;
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  width: 50%;
  height: 90%;
  & > svg {
    fill: ${(props) => (props.secondary ? colors.shadow1 : colors.grey1)};
  }
`;

const BackButton = ({ secondary, onClick }) => (
  <BackChevron secondary={secondary} onClick={onClick}>
    <Icon secondary={secondary}>
      <ChevronLeft />
    </Icon>
  </BackChevron>
);

BackButton.propTypes = {
  secondary: PropTypes.bool,
  onClick: PropTypes.func,
};

export default BackButton;
