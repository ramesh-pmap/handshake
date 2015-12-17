import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from '../constants';
import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
  sidebarOpened: false,
});

function dataReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
  case OPEN_SIDEBAR:
    return state.update('sidebarOpened', (value) => !value);
  case CLOSE_SIDEBAR:
    return state.update('sidebarOpened', (value) => !value);
  default:
    return state;
  }
}

export default dataReducer;
