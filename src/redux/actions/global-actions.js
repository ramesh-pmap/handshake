import {
  SET_AUTHORIZATION_TOKEN
} from '../constants/global-constants';


// Global.
export function setAuthorizationToken(value) {
  return { type: SET_AUTHORIZATION_TOKEN, value };
}
