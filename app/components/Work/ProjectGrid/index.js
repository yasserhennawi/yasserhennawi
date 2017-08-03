import React from 'react';
import styled from 'utils/styled-components';
import ProjectGridItem from 'components/Work/ProjectGridItem';
import { isOdd } from 'utils/helper';
import Button from 'components/Utils/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const getProjects = (projects, toolsBgColor, toolsWidth, onHomepageClick) =>
  projects.map((project, index) =>
    <ProjectGridItem
      key={index}
      title={project.title}
      secondary={isOdd(index)}
      brief={project.brief}
      roles={project.roles}
      tools={project.tools}
      toolsBgColor={toolsBgColor}
      width={toolsWidth}
      desktopImage={project.desktopImage}
      mobileImage={project.mobileImage}
    >
    </ProjectGridItem>
  )

const ProjectGrid = ({ projects, toolsWidth, toolsBgColor, onHomepageClick, ...props }) => (
  <Wrapper {...props}>
    {getProjects(projects, toolsBgColor, toolsWidth, onHomepageClick)}
  </Wrapper>
)

export default ProjectGrid;
