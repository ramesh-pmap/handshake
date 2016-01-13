import {
  TOGGLE_LEFT_SIDEBAR,
  TOGGLE_RIGHT_SIDEBAR,
  CHANGE_FOLDER,
  SELECT_FILE,
  SET_FILE_MANAGER_DATA,
  SET_SIDEBAR_HEIGHT,
  SET_CONTENT_AREA_VIEW,
  SET_RIGHT_PANEL_AREA_VIEW,
  IFRAME_SOURCE,
  SEARCHING_FOR
} from './constants';

function docMgtAppReducer(state = {}, action = {}) {
  switch (action.type) {
  case TOGGLE_LEFT_SIDEBAR:
    // console.log('TOGGLE_LEFT_SIDEBAR Action:', action);
    return Object.assign({}, state, {
      leftSidebarOpened: !action.value
    });
  case TOGGLE_RIGHT_SIDEBAR:
    // console.log('TOGGLE_RIGHT_SIDEBAR Action:', action);
    return Object.assign({}, state, {
      rightSidebarOpened: !action.value
    });
  case CHANGE_FOLDER:
    // console.log('CHANGE_FOLDER Action:', action);
    return Object.assign({}, state, {
      currentFolderPath: action.path,
    });
  case SELECT_FILE:
    // console.log('SELECT_FILE Action:', action);
    return Object.assign({}, state, {
      currentFileId: action.value,
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
    // console.log('SET_CONTENT_AREA_VIEW Action:', action);
    return Object.assign({}, state, {
      contentAreaView: action.value
    });
  case SET_RIGHT_PANEL_AREA_VIEW:
    // console.log('SET_RIGHT_PANEL_AREA_VIEW Action:', action);
    return Object.assign({}, state, {
      rightPanelAreaView: action.value
    });
  case IFRAME_SOURCE:
    // console.log('IFRAME_SOURCE Action:', action);
    return Object.assign({}, state, {
      frameUrl: action.value
    });
  case SEARCHING_FOR:
    // console.log('IFRAME_SOURCE Action:', action);
    return Object.assign({}, state, {
      searchingFor: action.value
    });
  default:
    return state;
  }
}

export default docMgtAppReducer;
