import {
  FETCH_DOCUMENT_REQUEST,
  FETCH_DOCUMENT_SUCCESS,
  FETCH_DOCUMENT_FAILURE
} from '../constants/folder-constants';

// Data / Async
function dmDocumentReducer(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
  case FETCH_DOCUMENT_REQUEST:
    return Object.assign({}, state, {
      isFetching: true,
      didInvalidate: false
    });
  case FETCH_DOCUMENT_SUCCESS:
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      items: action.document,
      lastUpdated: action.receivedAt
    });
  case FETCH_DOCUMENT_FAILURE:
    return Object.assign({}, state, {
      didInvalidate: true,
      error: action.error
    });
  default:
    return state;
  }
}


export default dmDocumentReducer;
