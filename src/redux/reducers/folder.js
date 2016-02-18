import {
  FETCH_FOLDER_REQUEST,
  FETCH_FOLDER_SUCCESS,
  FETCH_FOLDER_FAILURE
} from '../constants/folder-constants';

// Data / Async
function dmFoldersReducer(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
  case FETCH_FOLDER_REQUEST:
    return Object.assign({}, state, {
      isFetching: true,
      didInvalidate: false
    });
  case FETCH_FOLDER_SUCCESS:
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      items: action.folders,
      lastUpdated: action.receivedAt
    });
  case FETCH_FOLDER_FAILURE:
    return Object.assign({}, state, {
      didInvalidate: true,
      error: action.error
    });
  default:
    return state;
  }
}


export default dmFoldersReducer;
