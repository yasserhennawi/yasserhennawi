import React from 'react';
import PropTypes from 'prop-types';
import styled from 'utils/styled-components';
import colors from 'theme/color';
import ContactItem from '../ContactItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-height: 100vh;
  overflow: hidden;
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 600;
  text-shadow: 2px 2px 2px ${colors.shadow3};
  margin-bottom: 20px;
`;
const ContactItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding-left: 20px;
  width: 100%;
`;

const getContactItems = (items) =>
  items.map((item, index) => (
    <ContactItem
      key={index}
      url={item.url}
      logo={item.logo}
      bgColor={item.bgColor}
      isClickable={item.isClickable}
    />
  ));

const ContactCard = ({ contactItems }) => (
  <Wrapper>
    <Title>Get in touch!</Title>
    <ContactItemWrapper>{getContactItems(contactItems)}</ContactItemWrapper>
  </Wrapper>
);

ContactCard.propTypes = {
  contactItems: PropTypes.array.isRequired,
};

export default ContactCard;
