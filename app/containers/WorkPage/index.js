import React from 'react';
import { connect } from 'react-redux';
import { requestToLeaveRoute, changeGateState } from '../App/actions';
import PageContainer from '../../components/PageContainer'
import ProjectGridItem from '../../components/ProjectGridItem'
import Button from 'components/Utils/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
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
        <ProjectGridItem/>
        <Button
          secondary
          label="Go to Homepage"
          onClick={ () => {this.navigateTo('/')} }
        >
          <h4>
            Go to Homepage
          </h4>
        </Button>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = {
  requestToLeaveRoute,
  changeGateState,
}

export default connect(null, mapDispatchToProps)(Work)
