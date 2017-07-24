import React from 'react';
import styled from 'styled-components';
import WorkSection from '../WorkSection';
import Tool from '../Tool';
import Avatar from 'components/icons/Avatar';

const StyledTool = styled(Tool)`
  margin: 10px 10px 0 0;
`
const ToolsWrapper = styled.div`
  display: flex;
`
const getTools = (tools) =>
  tools.map( (tool, index) => (
    <Tool key={index} name={tool.name} image={tool.image}/>
  ))
const ToolsSection = ({ tool, ...props }) => (
  <WorkSection title="Tools">
    <ToolsWrapper>
      <StyledTool bgColor='#369' width="75px" name='React' logo={<Avatar/>}/>
      {/* {getTools(tools)} */}
    </ToolsWrapper>
  </WorkSection>
)

export default ToolsSection;
