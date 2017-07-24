import React from 'react';
import styled from 'styled-components';
import backgroundImage from 'static/homeBackground.png';
import BriefSection from '../Work/BriefSection';
import RolesSection from '../Work/RolesSection';
import ToolsSection from '../Work/ToolsSection';

const paras = [
  "When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  "When an unknown printer took a galley of type and scrambled it to make a type specimen book, when an unknown printer took a galley of type and ",
  "lorem Ipsum standard dummy text ever since the 1500s"
]
const roles = [
  "lorem Ipsum is simply dummy textk.",
  "lorem Ipsum is simply dummy textk.",
  "lorem Ipsum is simply dummy text00s"
]

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props)=> props.bgColor};
`
const BackgroundImage = styled.img`
  width: 100%;
  height: auto;
`
const BackgroundImageWrapper = styled.div`
  width: 50%;
`
const ContentWrapper = styled.div`
  width: calc(50% - 20px);
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: 10px;
  }
`
const ProjectGridItem = ({ bgColor, ...props }) => (
  <Wrapper>
    <BackgroundImageWrapper>
      <BackgroundImage  src={backgroundImage}/>
    </BackgroundImageWrapper>
    <ContentWrapper>
      <BriefSection paragraphes={paras}/>
      <RolesSection roles={roles}/>
      <ToolsSection />
    </ContentWrapper>
  </Wrapper>
)

export default ProjectGridItem;
