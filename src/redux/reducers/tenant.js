import {
  FETCH_TENANT_REQUEST,
  FETCH_TENANT_SUCCESS,
  FETCH_TENANT_FAILURE
} from '../constants/tenant-constants';

function dmTenantReducer(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
  case FETCH_TENANT_REQUEST:
    return Object.assign({}, state, {
      isFetching: true,
      didInvalidate: false
    });
  case FETCH_TENANT_SUCCESS:
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      items: action.tenant,
      lastUpdated: action.receivedAt
    });
  case FETCH_TENANT_FAILURE:
    return Object.assign({}, state, {
      didInvalidate: true,
      error: action.error
    });
  default:
    return state;
  }
}


export default dmTenantReducer;
