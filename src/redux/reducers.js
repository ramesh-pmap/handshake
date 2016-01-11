import {
  TOGGLE_LEFT_SIDEBAR,
  TOGGLE_RIGHT_SIDEBAR,
  CHANGE_FOLDER,
  SET_FILE_MANAGER_DATA,
  SET_SIDEBAR_HEIGHT,
  SET_CONTENT_AREA_VIEW,
  SET_RIGHT_PANEL_AREA_VIEW,
  IFRAME_SOURCE,
} from './constants';

function docMgtAppReducer(state = {}, action = {}) {
  switch (action.type) {
  case TOGGLE_LEFT_SIDEBAR:
    // console.log('TOGGLE_SIDEBAR Action:', action);
    return Object.assign({}, state, {
      leftSidebarOpened: !action.value
    });
  case TOGGLE_RIGHT_SIDEBAR:
    // console.log('TOGGLE_SIDEBAR Action:', action);
    return Object.assign({}, state, {
      rightSidebarOpened: !action.value
    });
  case CHANGE_FOLDER:
    // console.log('CHANGE_FOLDER Action:', action);
    return Object.assign({}, state, {
      currentFolderPath: action.path,
    });
  case SET_FILE_MANAGER_DATA:
    // console.log('SET_FILE_MANAGER_DATA Action:', action);
    return Object.assign({}, state, {
      fileManager: action.dataTree,
      fileMatrix: action.matrix
    });
  case SET_SIDEBAR_HEIGHT:
    // console.log('SET_SIDEBAR_HEIGHT Action:', action);
    return Object.assign({}, state, {
      sidebarHeight: action.value
    });
  case SET_CONTENT_AREA_VIEW:
    // console.log('SET_SIDEBAR_HEIGHT Action:', action);
    return Object.assign({}, state, {
      contentAreaView: action.value
    });
  case SET_RIGHT_PANEL_AREA_VIEW:
    // console.log('SET_SIDEBAR_HEIGHT Action:', action);
    return Object.assign({}, state, {
      rightPanelAreaView: action.value
    });
  case IFRAME_SOURCE:
    // console.log('IFRAME_SOURCE Action:', action);
    return Object.assign({}, state, {
      frameUrl: action.value
    });
  default:
    return state;
  }
}

export default docMgtAppReducer;
