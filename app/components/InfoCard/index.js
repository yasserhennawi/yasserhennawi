import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton'
import styled from 'styled-components';
import Avatar from '../../components/icons/Avatar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${'' /* width: 100%; */}
  z-index: 1;
  padding: 20px;
  border: 1px solid #212121;
  background-color: rgba(255,255,255,0.9);
`
const AvatarContainer = styled.div`
  height: 100px;
  width: 100px;
  background-color: #FFF;
  overflow: hidden;
  align-self: center;
  border-radius: 100%;
  border: 1px solid #212121;
  padding: 5px;
`
const Name = styled.h2`

`
const Title = styled.h2`
`

export default function InfoCard({ onShowcaseClick, avatar, name, title, ...props }){
  return (
    <Wrapper>
      <AvatarContainer>
        {avatar}
      </AvatarContainer>
      <Name>{name}</Name>
      <Title>{title}</Title>
      <FlatButton
        label="Go to Showcase"
        onTouchTap={ onShowcaseClick }
      />
    </Wrapper>
  )
}
