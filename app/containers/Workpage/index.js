import React from 'react';
import { connect } from 'react-redux';
import { requestToLeaveRoute, changeGateState } from '../App/actions';
import ProjectGridItem from '../../components/Work/ProjectGridItem'
import ProjectGrid from '../../components/Work/ProjectGrid'
import styled from 'styled-components';
import backgroundImage from 'assets/homeBackground.png';
import ReactIcon from 'components/icons/React';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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
        <ProjectGrid onHomepageClick={() => this.navigateTo('/')} projects={projects} toolsWidth='30px'/>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = {
  requestToLeaveRoute,
  changeGateState,
}

export default connect(null, mapDispatchToProps)(Work);
const paras = [
  "When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  "When an unknown printer took a galley of type and scrambled it to make a type specimen book, when an unknown printer took a galley of type and ",
  "lorem Ipsum standard dummy text ever since the 1500s"
]
const roles = [
  "lorem Ipsum is simply dummy textk.",
  "lorem Ipsum is simply dummy textk.",
  "lorem Ipsum is simply dummy text00s"
]
const tools = [
  {
    name: 'React',
    logo: <ReactIcon/>
  },
  {
    name: 'PostCSS',
    logo: <ReactIcon/>
  },
  {
    name: 'React',
    logo: <ReactIcon/>
  },
]
const projects = [
  {
    paragraphes: paras,
    roles: roles,
    tools: tools,
    image: backgroundImage,
  },  {
    paragraphes: paras,
    roles: roles,
    tools: tools,
    image: backgroundImage,
  },
  {
    paragraphes: paras,
    roles: roles,
    tools: tools,
    image: backgroundImage,
  },
]
