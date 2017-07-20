import GateAnimation from '../../components/GateAnimation'
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import styled from 'styled-components'
import selectors from './selectors';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const Wrapper = styled.div`
`;

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
    <MuiThemeProvider>
      <Wrapper>
        <GateAnimation />
        {React.Children.toArray(this.props.children)}
      </Wrapper>
    </MuiThemeProvider>
    );
  }
}

const mapStateToProps = selectors();

const mapDispatchToProps = { push };

export default connect(mapStateToProps, mapDispatchToProps)(App);
