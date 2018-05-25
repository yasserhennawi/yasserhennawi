import React from 'react';
import PropTypes from 'prop-types';
import styled from 'utils/styled-components';
import WorkSection from '../WorkSection';

const Paragraph = styled.p`
  margin-bottom: 5px;
`;
const ParagraphsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > p:last-child {
    margin-bottom: 0;
  }
`;
const getParagraphes = (paragraphes) =>
  paragraphes.map((paragraph, index) => (
    <Paragraph key={index}>{paragraph}</Paragraph>
  ));

const BriefSection = ({ paragraphes }) => (
  <WorkSection title="Brief">
    <ParagraphsWrapper>{getParagraphes(paragraphes)}</ParagraphsWrapper>
  </WorkSection>
);

BriefSection.propTypes = {
  paragraphes: PropTypes.array.isRequired,
};

export default BriefSection;
