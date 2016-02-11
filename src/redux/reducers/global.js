import {
  SET_AUTHORIZATION_TOKEN,
  SET_CONSUMER_ID
} from '../constants/global-constants';

function dmGlobalReducer(state = {
  isFetching: false,
  didInvalidate: false,
  tenant: []
}, action) {
  switch (action.type) {

  case SET_AUTHORIZATION_TOKEN:
    return Object.assign({}, state, {
      authorizationToken: action.value
    });
  case SET_CONSUMER_ID:
    return Object.assign({}, state, {
      consumerId: action.value
    });
  default:
    return state;
  }
}


export default dmGlobalReducer;
