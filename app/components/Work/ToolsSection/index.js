import React from 'react';
import PropTypes from 'prop-types';
import styled from 'utils/styled-components';
import WorkSection from '../WorkSection';
import Tool from '../Tool';

const StyledTool = styled(Tool)`
  margin: 10px 20px 0 0;
`;
const ToolsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const getTools = (tools, toolsBgColor, width, secondary) => (
  <ToolsWrapper>
    {tools.map((tool, index) => (
      <StyledTool
        bgColor={toolsBgColor}
        key={index}
        padding={tool.padding}
        secondary={secondary}
        width={width}
        name={tool.name}
        logoImage={tool.logoImage}
        logo={tool.logo}
      />
    ))}
  </ToolsWrapper>
);

const ToolsSection = ({ toolsBgColor, secondary, tools, width }) => (
  <WorkSection title="Tools">
    {getTools(tools, toolsBgColor, width, secondary)}
  </WorkSection>
);

ToolsSection.propTypes = {
  toolsBgColor: PropTypes.string,
  secondary: PropTypes.bool,
  tools: PropTypes.array,
  width: PropTypes.string,
};

export default ToolsSection;
