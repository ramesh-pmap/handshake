import {
  SET_AUTHORIZATION_TOKEN,
} from '../constants/global-constants';

function dmGlobalReducer(state = {}, action) {
  switch (action.type) {

  case SET_AUTHORIZATION_TOKEN:
    return Object.assign({}, state, {
      authorizationToken: action.value
    });
  default:
    return state;
  }
}


export default dmGlobalReducer;
