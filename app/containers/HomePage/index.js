import React from 'react';
import { FormattedMessage } from 'react-intl';
import FlatButton from 'material-ui/FlatButton'
import messages from './messages';
import { connect } from 'react-redux'
import { requestToLeaveRoute, changeGateState } from '../App/actions'
import styled from 'styled-components';
import Avatar from '../../components/icons/Avatar';

const bgColors = [
  '#212121',
  '#CCC'
]

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wallpaper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
`
const WallpaperBox = styled.div`
  position: absolute;
  width: 50vw;
  height: 50vh;
  background-color: ${props => props.backgroundColor};
  box-sizing: content-box;
  &:nth-child(1) {
    top:  0%;
    left:  0%;

  }
  &:nth-child(2) {
    top: 50%;
    left:  0%;
  }
  &:nth-child(3) {
    top:  0%;
    left: 50%;
  }
  &:nth-child(4) {
    top: 50%;
    left: 50%;
  }
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  padding: 20px;
  border: 1px solid #212121;
  background-color: rgba(255,255,255,0.9);
  & > * {

  }
`
const AvatarContainer = styled.div`
  height: 100px;
  width: 100px;
  background-color: #FFF;
  overflow: hidden;
  align-self: center;
  border-radius: 100%;
  border: 1px solid #212121;
  padding: 5px;
`
const Name = styled.h2`

`
const Title = styled.h2`

`

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount(props) {
    setTimeout(()=>{
      this.props.changeGateState();
    }, 500)
  }

  navigateTo(route) {
    this.props.changeGateState();
    this.props.requestToLeaveRoute(route);
  }

  render() {
    return (
      <Wrapper>
        <Wallpaper>
          <WallpaperBox backgroundColor={bgColors[0]}/>
          <WallpaperBox backgroundColor={bgColors[1]}/>
          <WallpaperBox backgroundColor={bgColors[1]}/>
          <WallpaperBox backgroundColor={bgColors[0]}/>
        </Wallpaper>
        <ContentWrapper>
          <AvatarContainer>
            <Avatar/>
          </AvatarContainer>
          <Name>Yasser Hennawi</Name>
          <Title>Front-End Developer</Title>
          <FlatButton
            label="Go to Showcase"
            onTouchTap={ () => this.navigateTo('/showcase') }
          />
        </ContentWrapper>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = {
  requestToLeaveRoute,
  changeGateState
}

export default connect(null, mapDispatchToProps)(HomePage)
