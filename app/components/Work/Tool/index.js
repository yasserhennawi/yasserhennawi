import React from 'react';
import PropTypes from 'prop-types';
import styled from 'utils/styled-components';
import colors from 'theme/color';

const gradientColor =
  'rgba(33,33,33,1), rgba(33,33,33,0.8), rgba(33,33,33,0.5), rgba(33,33,33,0)';
const secondaryGradientColor =
  'rgba(255,255,255,1), rgba(255,255,255,0.4), rgba(255,255,255,0), rgba(255,255,255,0)';
const Wrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: ${(props) => props.bgColor};
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  padding: ${(props) => props.padding};
  border-radius: 100%;
`;
const LogoLayer = styled.div`
  width: 100%;
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  display: flex;
  justify-content: center;
  background-image: url(${(props) => props.logoImage});
  background-size: contain;
  background-position: center;
  align-items: center;
`;
const NameLayer = styled.h5`
  position: absolute;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  box-sizing: border-box;
  color: ${colors.shadow2};
  font-weight: 500;
  background: -webkit-radial-gradient(
    ${(props) => (props.secondary ? secondaryGradientColor : gradientColor)}
  );
  background: -o-radial-gradient(
    ${(props) => (props.secondary ? secondaryGradientColor : gradientColor)}
  );
  background: -moz-radial-gradient(
    ${(props) => (props.secondary ? secondaryGradientColor : gradientColor)}
  );
  background: radial-gradient(
    ${(props) => (props.secondary ? secondaryGradientColor : gradientColor)}
  );
  text-shadow: -2px -2px 4px ${colors.white}, 2px 2px 4px ${colors.white};
  border-radius: 100%;
  transition: all 0.5s ease;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;
const Tool = ({
  bgColor,
  width,
  padding,
  logo,
  logoImage,
  name,
  secondary,
  ...props
}) => (
  <Wrapper
    bgColor={bgColor}
    padding={padding && '3px'}
    width={width}
    {...props}
  >
    <NameLayer secondary={secondary} width={width}>
      {name}
    </NameLayer>
    <LogoLayer logoImage={logoImage} width={width}>
      {logo}
    </LogoLayer>
  </Wrapper>
);

Tool.propTypes = {
  bgColor: PropTypes.string,
  width: PropTypes.string,
  padding: PropTypes.string,
  logo: PropTypes.element,
  logoImage: PropTypes.string,
  name: PropTypes.string,
  secondary: PropTypes.bool,
};

export default Tool;
