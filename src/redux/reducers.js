import { TOGGLE_SIDEBAR, IFRAME_SOURCE, CHANGE_FOLDER, SET_FILE_MANAGER_DATA } from './constants';

function docMgtAppReducer(state = {}, action = {}) {
  switch (action.type) {
  case TOGGLE_SIDEBAR:
    // console.log('Action:', action);
    return Object.assign({}, state, {
      sidebarOpened: !action.value
    });
  case CHANGE_FOLDER:
    // console.log('Action:', action);
    return Object.assign({}, state, {
      currentFolderPath: action.path,
    });
  case SET_FILE_MANAGER_DATA:
    // console.log('Action:', action);
    return Object.assign({}, state, {
      fileManager: action.dataTree,
      fileMatrix: action.matrix
    });
  case IFRAME_SOURCE:
    console.log('Action:', action);
    return Object.assign({}, state, {
      frameUrl: action.value
    });
  default:
    return state;
  }
}

export default docMgtAppReducer;
