import React from 'react';
import styled from 'styled-components';
import backgroundImage from 'assets/homeBackground.png';
import BriefSection from '../BriefSection';
import RolesSection from '../RolesSection';
import ToolsSection from '../ToolsSection';
import ReactIcon from 'components/icons/React';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props)=> props.bgColor};
  padding: 20px;
`
const BackgroundImage = styled.img`
  width: 100%;
  height: auto;
`
const BackgroundImageWrapper = styled.div`
  width: 50%;
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
`
const ProjectGridItem = ({ secondary, ...props }) => {
  if (secondary) {
    return (
      <Wrapper bgColor='#FFF'>
        <BackgroundImageWrapper>
          <BackgroundImage  src={backgroundImage}/>
        </BackgroundImageWrapper>
        <ContentWrapper secondary>
          <BriefSection paragraphes={paras}/>
          <RolesSection roles={roles}/>
          <ToolsSection tools={tools} width='40px'/>
          {props.children}
        </ContentWrapper>
      </Wrapper>
    )
  }
  return (
    <Wrapper bgColor='#212121'>
      <BackgroundImageWrapper>
        <BackgroundImage src={backgroundImage}/>
      </BackgroundImageWrapper>
      <ContentWrapper>
        <BriefSection paragraphes={paras}/>
        <RolesSection roles={roles}/>
        <ToolsSection tools={tools} width='40px'/>
        {props.children}
      </ContentWrapper>
    </Wrapper>
  )

}


export default ProjectGridItem;
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
const tools = [
  {
    name: 'React',
    logo: <ReactIcon/>
  },
  {
    name: 'PostCSS',
    logo: <ReactIcon/>
  },
  {
    name: 'React',
    logo: <ReactIcon/>
  },
  {
    name: 'React',
    logo: <ReactIcon/>
  },
  {
    name: 'React',
    logo: <ReactIcon/>
  },
  {
    name: 'React',
    logo: <ReactIcon/>
  },
  {
    name: 'React',
    logo: <ReactIcon/>
  },
  {
    name: 'React',
    logo: <ReactIcon/>
  },
]
