import React from 'react';
import PropTypes from 'prop-types';
import styled from 'utils/styled-components';
import CircularImage from 'components/Utils/CircularImage';
import Button from 'components/Utils/Button';
import { connect } from 'react-redux';
import colors from 'theme/color';
import {
  requestToLeaveRoute as requestToLeaveRouteAction,
  changeGateState as changeGateStateAction,
} from '../../containers/App/actions';

const secondaryGradientColor =
  'farthest-side, rgba(255,255,255,1), rgba(255,255,255,0.8), rgba(255,255,255,0.6), rgba(255,255,255,0.3)';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  max-width: 360px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  background: -webkit-radial-gradient(${secondaryGradientColor});
  background: -o-radial-gradient(${secondaryGradientColor});
  background: -moz-radial-gradient(${secondaryGradientColor});
  background: radial-gradient(${secondaryGradientColor});
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.3);
`;
const Name = styled.h2`
  color: ${colors.shadow2};
`;
const Title = styled.h3`
  color: ${colors.shadow3};
`;
const Summary = styled.h4`
  color: ${colors.shadow2};
`;
const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const StyledButton = styled(Button)`
  margin: 10px 15px 0 0;
  padding: 5px 10px;
  font-size: 14px;
  flex-grow: 1;
  &:last-child {
    margin-right: 0;
  }
`;

const invokeCallbacks = (callbacks, ...params) => () => {
  callbacks.forEach((callback) => {
    callback(...params);
  });
};

const getButtons = (buttons, ...onButtonClickCallbacks) =>
  buttons.map((button, index) => (
    <StyledButton
      key={index}
      secondary
      onClick={invokeCallbacks(onButtonClickCallbacks, button.route)}
    >
      {button.title}
    </StyledButton>
  ));

const InfoCard = ({
  avatar,
  image,
  avatarSize,
  name,
  title,
  summary,
  buttons,
  requestToLeaveRoute,
  changeGateState,
}) => (
  <Wrapper>
    <CircularImage size={avatarSize} image={image}>
      {avatar}
    </CircularImage>
    <Name>{name}</Name>
    <Title>{title}</Title>
    <Summary>{summary}</Summary>
    <ButtonsContainer>
      {getButtons(buttons, changeGateState, requestToLeaveRoute)}
    </ButtonsContainer>
  </Wrapper>
);

InfoCard.propTypes = {
  avatar: PropTypes.element,
  image: PropTypes.string,
  avatarSize: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  buttons: PropTypes.array,
  requestToLeaveRoute: PropTypes.func,
  changeGateState: PropTypes.func,
};
const mapDispatchToProps = {
  requestToLeaveRoute: requestToLeaveRouteAction,
  changeGateState: changeGateStateAction,
};

export default connect(null, mapDispatchToProps)(InfoCard);
