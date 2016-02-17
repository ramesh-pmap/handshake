import {
  FETCH_AUTH_REQUEST,
  FETCH_AUTH_SUCCESS,
  FETCH_AUTH_FAILURE
} from '../constants/auth-constants';

import { setAuthorizationToken } from './global-actions';

// Async Action creators
// Auth
export function fetchAuthRequest(consumerId) {
  return {
    type: FETCH_AUTH_REQUEST,
    consumerId
  };
}

export function fetchAuthSuccess(consumerId, json) {
  return {
    type: FETCH_AUTH_SUCCESS,
    consumerId,
    auth: json,
    receivedAt: Date.now()
  };
}

export function fetchAuthFailure(consumerId, error) {
  return {
    type: FETCH_AUTH_FAILURE,
    consumerId,
    error
  };
}

export function fetchAuth(consumerId) {
  let url = 'https://devsvc.pmapconnect.com/papi/auth';

  let sHeaders = new Headers();
  sHeaders.append('Accept-Language', 'en');
  sHeaders.append('ApplicationType', '4');
  sHeaders.append('ConsumerId', consumerId);
  sHeaders.append('Accept', 'application/json');
  sHeaders.append('Content-Type', 'application/json');

  let sInit = { method: 'POST',
             headers: sHeaders,
             body: "{ 'Username': 'mohbull', 'Password': 'Password2015', 'Algorithm': 'None' }"
  };

  return (dispatch) => {
    dispatch(fetchAuthRequest(consumerId));
    return fetch(url, sInit)
      .then(response => {
        const token = response.headers.get('Authorization');
        if (token) {
          dispatch(setAuthorizationToken(token));
        }
        return response.json();
      })
      .then(json => {
        if (json.ErrorMessage) {
          dispatch(fetchAuthFailure(consumerId, json));
        } else {
          dispatch(fetchAuthSuccess(consumerId, json));
        }
      })
      .catch(error =>
        dispatch(fetchAuthFailure(consumerId, error))
      );
  };
}
