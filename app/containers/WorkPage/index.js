import React from 'react';
import { connect } from 'react-redux';
import { requestToLeaveRoute, changeGateState } from '../App/actions';
import PageContainer from '../../components/PageContainer'
import Button from 'components/Utils/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

const InnerWrapper = styled.div`
  z-index: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

class Work extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

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
        <PageContainer>
          work page yastaaa
          <Button
            secondary
            label="Go to Homepage"
            onClick={ () => {this.navigateTo('/')} }
          >
            Go to Homepage
          </Button>
        </PageContainer>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = {
  requestToLeaveRoute,
  changeGateState,
}

export default connect(null, mapDispatchToProps)(Work)
