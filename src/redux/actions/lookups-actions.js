import {
  FETCH_LOOKUPS_REQUEST,
  FETCH_LOOKUPS_SUCCESS,
  FETCH_LOOKUPS_FAILURE
} from '../constants/lookups-constants';

// DATA - Async Action creators
// Lookupss
export function fetchLookupsRequest(consumerId, token) {
  return {
    type: FETCH_LOOKUPS_REQUEST,
    consumerId,
    token
  };
}

export function fetchLookupsSuccess(json) {
  return {
    type: FETCH_LOOKUPS_SUCCESS,
    lookups: json,
    receivedAt: Date.now()
  };
}

export function fetchLookupsFailure(error) {
  return {
    type: FETCH_LOOKUPS_FAILURE,
    error
  };
}

export function fetchLookups(token, consumerId) {
  let url = `https://devsvc.pmapconnect.com/papi/dm/lookups`;

  let sHeaders = new Headers();
  sHeaders.append('Accept-Language', 'en');
  sHeaders.append('ApplicationType', '1');
  sHeaders.append('Authorization', token);
  sHeaders.append('ConsumerId', consumerId);
  // sHeaders.append('LocationId', 8840); // many lookupss
  sHeaders.append('LocationId', 10918); // one subfolder and one lookups
  sHeaders.append('UserId', 10918);
  sHeaders.append('ModuleId', 16);

  let sInit = { method: 'GET',
             headers: sHeaders};

  return (dispatch) => {
    dispatch(fetchLookupsRequest(consumerId, token));

    return fetch(url, sInit)
      .then(response => response.json())
      .then(json => {
        if (json.ErrorMessage) {
          dispatch(fetchLookupsFailure(json));
        } else {
          dispatch(fetchLookupsSuccess(json));
        }
      })
      .catch(error =>
        dispatch(fetchLookupsFailure(error))
      );
  };
}
