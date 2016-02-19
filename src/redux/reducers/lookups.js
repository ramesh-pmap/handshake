import {
  FETCH_LOOKUPS_REQUEST,
  FETCH_LOOKUPS_SUCCESS,
  FETCH_LOOKUPS_FAILURE
} from '../constants/lookups-constants';

// Data / Async
function dmLookupsReducer(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
  case FETCH_LOOKUPS_REQUEST:
    return Object.assign({}, state, {
      isFetching: true,
      didInvalidate: false
    });
  case FETCH_LOOKUPS_SUCCESS:
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      items: action.lookups,
      lastUpdated: action.receivedAt
    });
  case FETCH_LOOKUPS_FAILURE:
    return Object.assign({}, state, {
      didInvalidate: true,
      error: action.error
    });
  default:
    return state;
  }
}


export default dmLookupsReducer;
