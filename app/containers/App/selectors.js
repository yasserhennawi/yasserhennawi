import { createSelector } from 'reselect';
import {
  selectRouteToLoad,
  selectIsRouteReady,
} from '../../components/GateAnimation/selectors';

// makeSelectLocationState expects a plain JS object for the routing state
export const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export default () =>
  createSelector(
    selectRouteToLoad(),
    selectIsRouteReady(),
    (routeToLoad, isRouteReady) => ({
      routeToLoad,
      isRouteReady,
    })
  );
