import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  & > * {
    z-index: 1;
  }
`

export default function PageContainer({children}){
    return (
      <Wrapper>
        {children}
      </Wrapper>
    )
}
