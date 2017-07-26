import React from 'react';
import styled from 'styled-components';
import media from 'utils/media';

const Wrapper = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    & > .textWrapper {
      max-width: 100%;
      padding: 5px 10px;
      padding-left: 30px;
    }
  };
  ${media.tablet`
    &:hover {
      & > .textWrapper {
        max-width: 0
        padding: 5px 0;
      }
    }
  `};
  & > * {
    box-shadow: 2px 2px 2px rgba(0,0,0,0.5);
  }
`
const LogoWrapper = styled.div`
  margin-left: -20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  ${media.tablet`
    width: 40px;
    height: 40px;
  `}
  padding: 10px;
  background-color: ${ props => props.logoBgColor }
  border-radius: 100%;
`
const TextWrapper = styled.h4`
  max-width: 100%;
  margin-left: -20px;
  transition: all 0.75s ease;
  border-radius: 0 100px 100px 0;
  white-space: nowrap;
  overflow: hidden;
  width: auto
  padding: 5px 0;
  max-width: 0;
  box-sizing: border-box;
  background-color: ${ props => props.textBgColor }
`
const navigateTo = (url) => {
  window.open(`https://www.${url}`);
}

const ContactItem = ({ isClickable, url, logo, bgColor, ...props }) => (
  <Wrapper onClick={ isClickable ? () => navigateTo(url) : null}>
    <TextWrapper className='textWrapper' textBgColor={bgColor}>
      {url}
    </TextWrapper>
    <LogoWrapper logoBgColor={bgColor}>
      {logo}
    </LogoWrapper>
  </Wrapper>
)
console.log(media.sm);
export default ContactItem;
