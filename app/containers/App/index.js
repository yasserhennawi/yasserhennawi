import GateAnimation from '../../components/GateAnimation'
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import styled from 'utils/styled-components'
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
        <Wrapper>
          <GateAnimation>
            {React.Children.toArray(this.props.children)}
          </GateAnimation>
        </Wrapper>
    );
  }
}

const mapStateToProps = selectors();

const mapDispatchToProps = { push };

export default connect(mapStateToProps, mapDispatchToProps)(App);
