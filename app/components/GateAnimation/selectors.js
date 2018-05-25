import { createSelector } from 'reselect';

export const selectAppDomain = () => (state) => state.get('app');

export const selectRouteToLoad = () => createSelector(
  selectAppDomain(),
  (state) => state.getIn(['requestedRoute', 'route'])
);

export const selectIsRouteReady = () => createSelector(
  selectAppDomain(),
  (state) => state.getIn(['requestedRoute', 'isRouteReady'])
);

export const selectGateIsOpen = () => createSelector(
  selectAppDomain(),
  (state) => state.getIn(['gateStatus'])
);

export default () => createSelector(
  selectRouteToLoad(),
  selectIsRouteReady(),
  selectGateIsOpen(),
  (routeToLoad, isRouteReady, gateStatus) => ({
    routeToLoad,
    isRouteReady,
    gateStatus,
  })
);
