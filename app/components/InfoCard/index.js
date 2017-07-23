import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Avatar from 'components/icons/Avatar';
import CircularImage from 'components/Utils/CircularImage';
import Button from 'components/Utils/Button';
import { connect } from 'react-redux';
import { requestToLeaveRoute, changeGateState } from '../../containers/App/actions'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  z-index: 1;
  max-width: 340px;
  & > * {
    font-weight: normal
  }
`
const Name = styled.h2`
  color: rgba(0,0,0,0.75);
`
const Title = styled.h3`
  color: rgba(0,0,0,0.54);
`
const Summary = styled.h4`
  color: rgba(0,0,0,0.75);
`
const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const StyledButton = styled(Button)`
  margin: 10px 10px 0 0;
  padding: 6px 12px;
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
