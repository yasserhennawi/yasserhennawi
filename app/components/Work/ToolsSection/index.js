import React from 'react';
import styled from 'utils/styled-components';
import WorkSection from '../WorkSection';
import Tool from '../Tool';

const StyledTool = styled(Tool)`
  margin: 10px 20px 0 0;
`
const ToolsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const getTools = (tools, width, secondary) =>
  <ToolsWrapper>
    { tools.map( (tool, index) =>
      <StyledTool key={index} padding={tool.padding} secondary={secondary} width={width} name={tool.name} logoImage={tool.logoImage} logo={tool.logo}/>
    )}
  </ToolsWrapper>

const ToolsSection = ({ secondary, tools, width, ...props }) => (
  <WorkSection title="Tools">
    {getTools(tools, width, secondary)}
  </WorkSection>
)

export default ToolsSection;
