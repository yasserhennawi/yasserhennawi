import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import GateAnimation from '../../components/GateAnimation';
import selectors from './selectors';

class App extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.routeToLoad &&
      nextProps.routeToLoad !== nextProps.location.pathname &&
      nextProps.isRouteReady
    ) {
      this.props.push(nextProps.routeToLoad);
    }
  }

  render() {
    return (
      <div>
        <GateAnimation>
          {React.Children.toArray(this.props.children)}
        </GateAnimation>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  push: PropTypes.func,
};

const mapStateToProps = selectors();

const mapDispatchToProps = { push };

export default connect(mapStateToProps, mapDispatchToProps)(App);
