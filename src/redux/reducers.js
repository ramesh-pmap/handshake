import { TOGGLE_SIDEBAR, IFRAME_SOURCE } from './constants';

export default function toggleSidebarReducer(state = {}, action = {}) {
  switch (action.type) {
  case TOGGLE_SIDEBAR:
    // console.log('Action:', action);
    return Object.assign({}, state, {
      sidebarOpened: !action.value
    });
  default:
    return state;
  }
}

export default function changeFrameSourceReducer(state = {}, action = {}) {
  switch (action.type) {
  case IFRAME_SOURCE:
    console.log('Action:', action);
    return Object.assign({}, state, {
      frameUrl: action.value
    });
  default:
    return state;
  }
}
