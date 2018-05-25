import React from 'react';
import PropTypes from 'prop-types';
import styled from 'utils/styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h4`
  font-weight: normal;
  margin-bottom: 5px;
`;

const WorkSection = ({ title, children, ...props }) => (
  <Wrapper {...props}>
    <Title>{title}</Title>
    {children}
  </Wrapper>
);

WorkSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  title: PropTypes.string,
};

export default WorkSection;
