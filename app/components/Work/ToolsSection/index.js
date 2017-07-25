import React from 'react';
import styled from 'styled-components';
import WorkSection from '../WorkSection';
import Tool from '../Tool';

const StyledTool = styled(Tool)`
  margin: 10px 20px 0 0;
`
const ToolsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const getTools = (tools, width) =>
  <ToolsWrapper>
    { tools.map( (tool, index) =>
      <StyledTool key={index} width={width} name={tool.name} logo={tool.logo}/>
    )}
  </ToolsWrapper>

const ToolsSection = ({ tools, width, ...props }) => (
  <WorkSection title="Tools">
    {getTools(tools, width)}
  </WorkSection>
)

export default ToolsSection;
