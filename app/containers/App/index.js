import GateAnimation from '../../components/GateAnimation'
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import styled from 'styled-components'
import selectors from './selectors';

const Wrapper = styled.div`
  ${'' /* & > div {
    & > * {
      z-index: 1
    }
  } */}
`;
const OuterWrapper = styled.div``
class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillReceiveProps(nextProps){
    if(nextProps.routeToLoad
      && nextProps.routeToLoad !== nextProps.location.pathname
      && nextProps.isRouteReady)
      this.props.push(nextProps.routeToLoad)
  }

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <OuterWrapper>
        <GateAnimation />
        <Wrapper>
          {React.Children.toArray(this.props.children)}
        </Wrapper>
      </OuterWrapper>
    );
  }
}

const mapStateToProps = selectors();

const mapDispatchToProps = { push };

export default connect(mapStateToProps, mapDispatchToProps)(App);
