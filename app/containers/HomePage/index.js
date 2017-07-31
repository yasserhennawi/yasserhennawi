import React from 'react';
import { connect } from 'react-redux'
import { requestToLeaveRoute, changeGateState } from '../App/actions'
import styled from 'utils/styled-components';
import InfoCard from '../../components/InfoCard'
import backgroundImage from 'assets/homeBackground.png';

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
const bgColors = [
  '#212121',
  '#CCC'
]

const buttons = [
  { title: 'Projects', route: '/work'},
  { title: 'Contact', route: '/contact'},
]

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
          name='Yasser Hennawi'
          title='UX/UI Front-End Developer'
          summary='Providing high-quality and fully responsive front-end solutions, Specialized in React and Redux SPAs.'
          // avatar={<Avatar/>}
          image='https://t3.ftcdn.net/jpg/01/04/10/10/240_F_104101070_wbEDt3CmlzqnPbdmOlVCL7Q7yu9mCduz.jpg'
          avatarSize='150px'
          buttons={buttons}
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
