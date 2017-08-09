import React from 'react';
import PropTypes from 'prop-types';
import styled from 'utils/styled-components';
import CircularImage from 'components/Utils/CircularImage';
import Button from 'components/Utils/Button';
import { connect } from 'react-redux';
import { requestToLeaveRoute, changeGateState } from '../../containers/App/actions'
import colors from 'theme/color'

const gradientColor = `rgba(33,33,33,1), rgba(33,33,33,0.8), rgba(33,33,33,0.5), rgba(33,33,33,0)`
const secondaryGradientColor = `farthest-side, rgba(255,255,255,1), rgba(255,255,255,0.8), rgba(255,255,255,0.6), rgba(255,255,255,0.3)`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  max-width: 360px;
  border-radius: 20px;
  background-color: rgba(255,255,255,0.3);
  background: -webkit-radial-gradient(${secondaryGradientColor});
  background: -o-radial-gradient(${secondaryGradientColor});
  background: -moz-radial-gradient(${secondaryGradientColor});
  background: radial-gradient(${secondaryGradientColor});
  box-shadow: 0px 0px 20px rgba(255,255,255,0.3);
`
const Name = styled.h2`
  color: ${colors.shadow2};
`
const Title = styled.h3`
  color: ${colors.shadow3};
`
const Summary = styled.h4`
  color: ${colors.shadow2};
`
const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const StyledButton = styled(Button)`
  margin: 10px 15px 0 0;
  padding: 5px 10px;
  font-size: 14px;
  flex-grow: 1;
  &:last-child {
    margin-right: 0;
  }
`

class InfoCard extends React.PureComponent {

  navigateTo(route) {
    this.props.changeGateState();
    this.props.requestToLeaveRoute(route);
  }

  getButtons = buttons =>
    buttons.map((button, index) =>
      <StyledButton
        key={index}
        onClick={()=>{this.navigateTo(button.route)}}
        secondary
      >
        {button.title}
      </StyledButton>
  )

  render() {
    const {
      onShowcaseClick,
      avatar,
      image,
      avatarSize,
      name,
      title,
      summary,
      buttons,
    } = this.props;

    return (
      <Wrapper>
        <CircularImage size={avatarSize} image={image}>
          {avatar}
        </CircularImage>
        <Name>{name}</Name>
        <Title>{title}</Title>
        <Summary>{summary}</Summary>
        <ButtonsContainer>{this.getButtons(buttons)}</ButtonsContainer>
      </Wrapper>
    )
  }
}

const mapDispatchToProps = {
  requestToLeaveRoute,
  changeGateState
}

export default connect(null, mapDispatchToProps)(InfoCard)
