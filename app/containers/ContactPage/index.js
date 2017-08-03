import React from 'react';
import { connect } from 'react-redux';
import { requestToLeaveRoute, changeGateState } from '../App/actions';
import Button from 'components/Utils/Button';
import styled from 'utils/styled-components';
import backgroundImage from 'assets/contactBackground.png';
import contactPage from 'data/contactpage';
import ContactCard from 'components/ContactCard'
import BackButton from 'components/Main/BackButton'

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: rgba(0,0,0,0.85);
  &:after {
    content: "";
    background: url(${backgroundImage}) no-repeat 15%/cover;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
  & * { color: #FFF }
`

class Contact extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount(props) {
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
        <BackButton secondary onClick={() => this.navigateTo('/')} />
        <ContactCard contactItems={contactPage.contactItems}/>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = {
  requestToLeaveRoute,
  changeGateState,
}

export default connect(null, mapDispatchToProps)(Contact)
