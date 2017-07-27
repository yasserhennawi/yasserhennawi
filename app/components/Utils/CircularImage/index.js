import React from 'react';
import styled from 'utils/styled-components';

const AvatarContainer = styled.div`
  height: ${(props)=> props.size};
  width: ${(props)=> props.size};
  overflow: hidden;
  align-self: center;
  border-radius: 100%;
  ${'' /* border: 1px solid rgba(20,20,20,0.75); */}
  padding: 5px;
  margin-bottom: 10px;
  background: url(${(props) => props.bgImage}) no-repeat center/cover;
`

export default function CircularImage({ size, children, image, ...props }){
  return (
    <AvatarContainer size={size} bgImage={image}>
      {children}
    </AvatarContainer>
  )
}
