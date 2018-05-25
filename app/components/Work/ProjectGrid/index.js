import React from 'react';
import PropTypes from 'prop-types';
import styled from 'utils/styled-components';
import ProjectGridItem from 'components/Work/ProjectGridItem';
import { isOdd } from 'utils/helper';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const getProjects = (projects, toolsBgColor, toolsWidth) =>
  projects.map((project, index) => (
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
    />
  ));

const ProjectGrid = ({
  projects,
  toolsWidth,
  toolsBgColor,
  onHomepageClick,
  ...props
}) => (
  <Wrapper {...props}>
    {getProjects(projects, toolsBgColor, toolsWidth, onHomepageClick)}
  </Wrapper>
);

ProjectGrid.propTypes = {
  projects: PropTypes.array,
  toolsWidth: PropTypes.string,
  toolsBgColor: PropTypes.string,
  onHomepageClick: PropTypes.func,
};

export default ProjectGrid;
