/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';

export const LEAVE_ROUTE = 'yasserhennawi/App/LEAVE_ROUTE';
export const ROUTE_READY = 'yasserhennawi/App/ROUTE_READY';
export const START_PAGE_ANIMATION = 'yasserhennawi/App/START_PAGE_ANIMATION';
export const CHANGE_GATE_STATE = 'yasserhennawi/App/CHANGE_GATE_STATE';
// export const APP_LOADED = 'yasserhennawi/App/APP_LOADED';
