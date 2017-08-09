import React from 'react';
import { connect } from 'react-redux';
import { requestToLeaveRoute, changeGateState } from '../App/actions';
import ProjectGridItem from '../../components/Work/ProjectGridItem';
import ProjectGrid from '../../components/Work/ProjectGrid';
import styled from 'utils/styled-components';
import backgroundImage from 'assets/homeBackground.png';
import BackButton from 'components/Main/BackButton';
import CloudAnimation from 'components/Main/CloudAnimation';
import media from 'utils/media'
import workpage from 'data/workpage';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledProjectGrid = styled(ProjectGrid)`
  padding: 20px calc((100% - 1180px)/2);
  ${media.giant`
    padding: 20px;
  `}
  ${media.tablet`
    padding: 10px;
  `}
  ${media.phone`
    padding: 0;
  `}
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
        <CloudAnimation opacity='0.08'/>
        <BackButton onClick={() => this.navigateTo('/')}/>
        <StyledProjectGrid projects={workpage.projects} toolsBgColor={workpage.toolsBgColor} toolsWidth={workpage.toolsWidth}/>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = {
  requestToLeaveRoute,
  changeGateState,
}

export default connect(null, mapDispatchToProps)(Work);
