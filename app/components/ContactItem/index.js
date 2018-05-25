import React from 'react';
import PropTypes from 'prop-types';
import styled from 'utils/styled-components';
import media from 'utils/media';
import colors from 'theme/color';

const Wrapper = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.isClickable ? 'pointer' : 'auto')};
  box-sizing: border-box;
  &:hover {
    & > .textWrapper {
      max-width: 100%;
      padding: 5px 10px;
      padding-left: 30px;
    }
  }
  ${media.tablet`
    & > .textWrapper {
      max-width: 100%;
      padding: 5px 10px;
      padding-left: 30px;
    }
  `};
  & > * {
    box-shadow: 2px 2px 2px ${colors.shadow3};
  }
`;
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
  `} padding: 10px;
  background-color: ${(props) => props.logoBgColor};
  border-radius: 100%;
`;
const TextWrapper = styled.h4`
  margin-left: -20px;
  transition: all 0.75s ease;
  border-radius: 0 100px 100px 0;
  overflow:hidden;
  white-space:nowrap;
  text-overflow: ellipsis;
  width: auto
  padding: 5px 0;
  max-width: 1%;
  box-sizing: border-box;
  background-color: ${(props) => props.textBgColor}
`;
const navigateTo = (url) => {
  window.open(`https://www.${url}`);
};

const ContactItem = ({ isClickable, url, logo, bgColor }) => (
  <Wrapper
    isClickable={isClickable}
    onClick={
      isClickable &&
      (() => {
        navigateTo(url);
      })
    }
  >
    <TextWrapper className="textWrapper" textBgColor={bgColor}>
      {url}
    </TextWrapper>
    <LogoWrapper className="logoWrapper" logoBgColor={bgColor}>
      {logo}
    </LogoWrapper>
  </Wrapper>
);

ContactItem.defaultProps = {
  isClickable: true,
};

ContactItem.propTypes = {
  isClickable: PropTypes.bool,
  url: PropTypes.string.isRequired,
  logo: PropTypes.element.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default ContactItem;
