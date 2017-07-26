import React from 'react';
import styled from 'styled-components';
import BriefSection from '../BriefSection';
import RolesSection from '../RolesSection';
import ToolsSection from '../ToolsSection';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.secondary ? `row-reverse` : `row`};
  justify-content: space-between;
  align-items: center;
  background-color: ${(props)=> props.bgColor};
  @media (max-width: 760px){
    flex-direction: column;
  }
  padding: 40px;
`
const BackgroundImage = styled.img`
  width: 100%;
  height: auto;
`
const BackgroundImageWrapper = styled.div`
  width: 50%;
  @media (max-width: 760px){
    width: 100%;
    margin-bottom: 20px;
  }
`
const ContentWrapper = styled.div`
  & * {
    color: ${ props => props.secondary ? '#212121' : '#FFF' }
  }
  width: calc(50% - 20px);
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: 10px;
  }
  @media (max-width: 760px){
    width: 100%;
  }
`
const ChildrenWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
`
const ProjectGridItem = ({ children, width, paragraphes, roles, tools, secondary, image, ...props }) => {
  return (
    <Wrapper secondary={secondary} bgColor={secondary ? '#FFF' : '#212121'}>
      <BackgroundImageWrapper>
        <BackgroundImage src={image}/>
      </BackgroundImageWrapper>
      <ContentWrapper secondary={secondary}>
        <BriefSection paragraphes={paragraphes}/>
        <RolesSection roles={roles}/>
        <ToolsSection secondary={secondary} tools={tools} width={width}/>
      </ContentWrapper>
      { children ? <ChildrenWrapper>
        {children}
      </ChildrenWrapper>
      : null }
    </Wrapper>
  )
}
export default ProjectGridItem;
