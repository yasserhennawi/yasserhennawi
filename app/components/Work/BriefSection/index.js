import React from 'react';
import styled from 'styled-components';
import WorkSection from '../WorkSection';

const Paragraph = styled.p`
  margin-bottom: 5px;
`
const ParagraphsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > p:last-Child {
    margin-bottom: 0;
  }
`
const getParagraphes = (paragraphes) =>
  paragraphes.map( (paragraph, index) => (
    <Paragraph key={index}>
      {paragraph}
    </Paragraph>
  ))
const BriefSection = ({ paragraphes, ...props }) => (
  <WorkSection title="Brief">
    <ParagraphsWrapper>
      {getParagraphes(paragraphes)}
    </ParagraphsWrapper>
  </WorkSection>
)

export default BriefSection;
