import React from 'react';
import { connect } from 'react-redux';
import { requestToLeaveRoute, changeGateState } from '../App/actions';
import ProjectGridItem from '../../components/Work/ProjectGridItem'
import Button from 'components/Utils/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledButton = styled(Button)`
  margin: 10px 15px 0 0;
  padding: 5px 10px;
  font-size: 14px;
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
        <ProjectGridItem
          // secondary
        >
          <StyledButton
            // secondary
            label="Go to Homepage"
            onClick={ () => {this.navigateTo('/')} }
          >

            Go to Homepage
          </StyledButton>
        </ProjectGridItem>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = {
  requestToLeaveRoute,
  changeGateState,
}

export default connect(null, mapDispatchToProps)(Work)
