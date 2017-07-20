import React from 'react';
import { FormattedMessage } from 'react-intl';
import FlatButton from 'material-ui/FlatButton'
import messages from './messages';
import { connect } from 'react-redux'
import { requestToLeaveRoute, changeGateState } from '../App/actions'


class Showcase extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount(props) {
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
      <div>
        <FlatButton
          label="Go to Homepage"
          onTouchTap={ () => this.navigateTo('/') }
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  requestToLeaveRoute,
  changeGateState,
}

export default connect(null, mapDispatchToProps)(Showcase)
