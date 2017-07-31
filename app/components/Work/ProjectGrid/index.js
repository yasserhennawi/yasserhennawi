import React from 'react';
import styled from 'utils/styled-components';
import ProjectGridItem from 'components/Work/ProjectGridItem';
import { isOdd } from 'utils/helper';
import Button from 'components/Utils/Button';
const StyledButton = styled(Button)`
  margin: 10px 15px 0 0;
  padding: 5px 10px;
  font-size: 14px;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const getProjects = (projects, toolsWidth, onHomepageClick) =>
  projects.map((project, index) =>
    <ProjectGridItem
      key={index}
      secondary={isOdd(index)}
      paragraphes={project.paragraphes}
      roles={project.roles}
      tools={project.tools}
      width={toolsWidth}
      desktopImage={project.desktopImage}
      mobileImage={project.mobileImage}
    >
    </ProjectGridItem>
  )

const ProjectGrid = ({ projects, toolsWidth, onHomepageClick, ...props }) => (
  <Wrapper>
    {getProjects(projects, toolsWidth, onHomepageClick)}
  </Wrapper>
)

export default ProjectGrid;
