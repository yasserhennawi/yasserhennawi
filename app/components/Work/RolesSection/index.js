import React from 'react';
import PropTypes from 'prop-types';
import styled from 'utils/styled-components';
import WorkSection from '../WorkSection';
import Check from '../../icons/Check';

const Role = styled.h5`
  display: flex;
  margin-bottom: 5px;
`;
const CheckIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 17px;
  height: 17px;
  margin: 2px 5px 0 0;
`;
const getRoles = (roles) =>
  roles.map((role, index) => (
    <Role key={index}>
      <CheckIconWrapper>
        <Check />
      </CheckIconWrapper>
      {role}
    </Role>
  ));
const RolesSection = ({ roles }) => (
  <WorkSection title="Roles">{getRoles(roles)}</WorkSection>
);

RolesSection.propTypes = {
  roles: PropTypes.array,
};

export default RolesSection;
