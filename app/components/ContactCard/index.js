import React from 'react';
import styled from 'styled-components';
import backgroundImage from 'assets/contactBackground.png';
import Button from 'components/Utils/Button';
import ContactItem from '../ContactItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-height: 100vh;
  overflow: hidden;
  padding: 20px;
  max-width: 340px;
`
const StyledButton = styled(Button)`
  padding: 10px 10px;
  font-size: 14px;
`
const Title = styled.h1`
  font-weight: 600;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.5);
  margin-bottom: 20px;
`
const ContactItemWrapper = styled.div `
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

const getContactItems = (items) => (
  <ContactItemWrapper>
    {items.map((item, index) => (
      <ContactItem
        key={index}
        url={item.url}
        logo={item.logo}
        bgColor={item.bgColor}
      />
    ))}
  </ContactItemWrapper>
)
const ContactCard = ({ onHomepageClick, contactItems, ...props }) => (
    <Wrapper>
      <Title>
        Get in touch!
      </Title>
      { contactItems ? getContactItems(contactItems) : null }
      {/* DevButton: to be removed */}
      <StyledButton
        onClick={onHomepageClick}>
        Homepage
      </StyledButton>
    </Wrapper>
)

export default ContactCard;
