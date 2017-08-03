import React from 'react';
import styled from 'utils/styled-components';
import BriefSection from '../BriefSection';
import RolesSection from '../RolesSection';
import ToolsSection from '../ToolsSection';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.secondary ? `row-reverse` : `row`};
  justify-content: space-between;
  @media (max-width: 760px){
    flex-direction: column;
  }
  padding: 40px;
`
const Title = styled.h3`

`
const DesktopImage = styled.img`
  width: 100%;
  height: auto;
`
const MobileImage = styled.img`
  margin-top: -25%;
  margin-left: 60%;
  width: 30%;
  height: auto;
`
const BackgroundImageWrapper = styled.div`
  width: 45%;
  @media (max-width: 760px){
    width: 100%;
    margin-bottom: 20px;
  };
  & > *{
    filter: drop-shadow(-3px 3px 3px rgba(0,0,0,0.5))
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
const ProjectGridItem = ({ children, title, toolsBgColor, width, brief, roles, tools, secondary, desktopImage, mobileImage, ...props }) => {
  return (
    <Wrapper secondary={secondary} bgColor={secondary ? '#FFF' : '#212121'}>
      <BackgroundImageWrapper secondary >
        <DesktopImage src={desktopImage}/>
        <MobileImage src={mobileImage}/>
      </BackgroundImageWrapper>
      <ContentWrapper secondary>
        <Title>{title}</Title>
        { brief ?
          <BriefSection paragraphes={brief}/>
        : null }
        <RolesSection roles={roles}/>
        <ToolsSection toolsBgColor={toolsBgColor} secondary tools={tools} width={width}/>
      </ContentWrapper>
      { children ? <ChildrenWrapper>
        {children}
      </ChildrenWrapper>
      : null }
    </Wrapper>
  )
}
export default ProjectGridItem;
