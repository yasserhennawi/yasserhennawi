import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'utils/styled-components';
import backgroundImage from 'assets/contactBackground.png';
import contactPage from 'data/contactpage';
import ContactCard from 'components/ContactCard';
import BackButton from 'components/Main/BackButton';
import colors from 'theme/color';
import { requestToLeaveRoute, changeGateState } from '../App/actions';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: ${colors.shadow1};
  &:after {
    content: '';
    background: url(${backgroundImage}) no-repeat 15% / cover;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
  & * {
    color: ${colors.white};
  }
`;

class Contact extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    setTimeout(() => {
      this.props.changeGateState();
    }, 500);
  }

  navigateTo(route) {
    this.props.changeGateState();
    this.props.requestToLeaveRoute(route);
  }

  render() {
    return (
      <Wrapper>
        <BackButton
          secondary
          onClick={() => {
            this.navigateTo('/');
          }}
        />
        <ContactCard contactItems={contactPage.contactItems} />
      </Wrapper>
    );
  }
}

const mapDispatchToProps = {
  requestToLeaveRoute,
  changeGateState,
};

Contact.propTypes = {
  changeGateState: PropTypes.func,
  requestToLeaveRoute: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Contact);
