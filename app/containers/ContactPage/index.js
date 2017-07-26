import React from 'react';
import { connect } from 'react-redux';
import { requestToLeaveRoute, changeGateState } from '../App/actions';
import Button from 'components/Utils/Button';
import styled from 'styled-components';
import Facebook from 'components/icons/Facebook';
import Phone from 'components/icons/Phone';
import Twitter from 'components/icons/Twitter';
import Linkedin from 'components/icons/Linkedin';
import Github from 'components/icons/Github';
import Email from 'components/icons/Email';
import backgroundImage from 'assets/contactBackground.png';
import ContactCard from '../../components/ContactCard'

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: rgba(0,0,0,0.75);
  &:after {
    content: "";
    background: url(${backgroundImage}) no-repeat 15%/cover;
    ${'' /* opacity: 0.25; */}
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
        <ContactCard contactItems={contactItems} onHomepageClick={() => this.navigateTo('/')}/>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = {
  requestToLeaveRoute,
  changeGateState,
}

export default connect(null, mapDispatchToProps)(Contact)
const contactItems = [
  {
    url: 'facebook.com/yasserahennawi',
    logo: <Facebook/>,
    bgColor: 'rgb(59,89,152)',
  },
  {
    url: 'twitter.com/YasserHennawi',
    logo: <Twitter/>,
    bgColor: '#0084b4',
  },
  {
    url: 'linkedin.com/in/YasserHennawi',
    logo: <Linkedin/>,
    bgColor: '#0077B5',
  },
  {
    url: 'github.com/YasserHennawi',
    logo: <Github/>,
    bgColor: '#323131',
  },
  {
    url: '+20 127 5916 291 ',
    logo: <Phone/>,
    bgColor: '#607D8B',
    isClickable: false,
  },
  {
    url: 'yahennawi@gmail.com',
    logo: <Email/>,
    bgColor: '#DD4B3E',
    isClickable: false,
  },

]
