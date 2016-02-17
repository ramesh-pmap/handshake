import {
  SET_AUTHORIZATION_TOKEN,
  SET_CONSUMER_ID
} from '../constants/global-constants';


// Global.
export function setAuthorizationToken(value) {
  return {
    type: SET_AUTHORIZATION_TOKEN,
    value
  };
}

export function setConsumerId(value) {
  return {
    type: SET_CONSUMER_ID,
    value
  };
}
