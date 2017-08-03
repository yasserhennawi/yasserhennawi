import React from 'react';
import { connect } from 'react-redux'
import { requestToLeaveRoute, changeGateState } from '../App/actions'
import styled from 'utils/styled-components';
import InfoCard from '../../components/InfoCard'
import backgroundImage from 'assets/homeBackground.png';
import myInfo from 'data/homepage';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 20px;
  &:after {
    content: "";
    background: url(${backgroundImage}) no-repeat center/cover;
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
}
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
        <InfoCard
          name={myInfo.name}
          title={myInfo.title}
          summary={myInfo.summary}
          avatar={myInfo.avatar}
          image={myInfo.image}
          avatarSize={myInfo.avatarSize}
          buttons={myInfo.buttons}
        />
      </Wrapper>
    );
  }
}

const mapDispatchToProps = {
  requestToLeaveRoute,
  changeGateState
}

export default connect(null, mapDispatchToProps)(HomePage)
