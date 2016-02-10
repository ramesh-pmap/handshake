import {
  FETCH_FOLDERS_REQUEST,
  FETCH_FOLDERS_SUCCESS,
  FETCH_FOLDERS_FAILURE
} from '../constants/folders-constants';

// Data / Async
function dmFoldersReducer(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
  case FETCH_FOLDERS_REQUEST:
    return Object.assign({}, state, {
      isFetching: true,
      didInvalidate: false
    });
  case FETCH_FOLDERS_SUCCESS:
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      items: action.folders,
      lastUpdated: action.receivedAt
    });
  case FETCH_FOLDERS_FAILURE:
    return Object.assign({}, state, {
      didInvalidate: true,
      error: action.error
    });
  default:
    return state;
  }
}


export default dmFoldersReducer;
