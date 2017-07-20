import {
  LEAVE_ROUTE,
  ROUTE_READY,
  CHANGE_GATE_STATE,
} from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
  requestedRoute: {
    route: null,
    isRouteReady: false,
  },
  gateStatus:  false
});

export default (state = initialState, action) => {
  switch(action.type) {
    case LEAVE_ROUTE:
      return state.mergeIn(['requestedRoute'], {
        route: action.route,
        isRouteReady: false,
      });

    case ROUTE_READY:
      return state.mergeIn(['requestedRoute'], {
        isRouteReady: true,
      });

    case CHANGE_GATE_STATE:
      return state.mergeIn(['gateStatus'], !state.get('gateStatus'));

  }
  return state;
}
