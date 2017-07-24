import React from 'react';
import styled from 'styled-components';
import WorkSection from '../WorkSection';

const iconUrl = 'https://cdn2.iconfinder.com/data/icons/bullet-points/64/Bulletpoint_Bullet_Listicon_Shape_Bulletfont_Glyph_Typography_Bullet_Point_Customshape_Wingding_Custom_Star_Four_Square_Decoretive-512.png';
const Role = styled.h5`
  display: flex;
  margin-bottom: 5px;
  align-items: center;
`
const RolesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > p:last-Child {
    margin-bottom: 0;
  }
`
const Icon = styled.div`
  background-image: url(${iconUrl});
  background-size: contain;
  width: 15px;
  height: 15px;
  margin-right: 10px;
`
const getRoles = (roles) =>
  roles.map( (role, index) => (
    <Role key={index}>
      <Icon/>{role}
    </Role>
  ))
const RolesSection = ({ roles, ...props }) => (
  <WorkSection title="Roles">
    {getRoles(roles)}
  </WorkSection>
)

export default RolesSection;
