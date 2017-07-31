import React from 'react';
import { connect } from 'react-redux';
import { requestToLeaveRoute, changeGateState } from '../App/actions';
import ProjectGridItem from '../../components/Work/ProjectGridItem';
import ProjectGrid from '../../components/Work/ProjectGrid';
import styled from 'utils/styled-components';
import backgroundImage from 'assets/homeBackground.png';
import GoCrushDesktopMock from 'assets/gocrushDesktopMock.png';
import GoCrushMobileMock from 'assets/gocrushMobileMock.png';
import GoodsenseDesktopMock from 'assets/goodsenseDesktopMock.png';
import GoodsenseMobileMock from 'assets/goodsenseMobileMock.png';
import ReactIcon from 'components/icons/React';
import BackButton from 'components/Main/BackButton';
import CloudAnimation from 'components/Main/CloudAnimation';

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
        <CloudAnimation/>
        <BackButton onClick={() => this.navigateTo('/')} />
        <ProjectGrid projects={projects} toolsWidth='50px'/>
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
    desktopImage: GoCrushDesktopMock,
    mobileImage: GoCrushMobileMock,
  },  {
    paragraphes: paras,
    roles: roles,
    tools: tools,
    desktopImage: GoodsenseDesktopMock,
    mobileImage: GoodsenseMobileMock,
  },
  {
    paragraphes: paras,
    roles: roles,
    tools: tools,
    desktopImage: GoCrushDesktopMock,
    mobileImage: GoCrushMobileMock,
  },
]
