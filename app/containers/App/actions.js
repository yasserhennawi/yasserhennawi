import {
  LEAVE_ROUTE,
  ROUTE_READY,
  CHANGE_GATE_STATE,
} from './constants';

export const requestToLeaveRoute = (route) => ({
  type: LEAVE_ROUTE,
  route,
});

export const routeIsReady = () => ({
  type: ROUTE_READY,
});

export const changeGateState = () => ({
  type: CHANGE_GATE_STATE,
});
