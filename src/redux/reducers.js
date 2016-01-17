import {
  WINDOW_DIMENSIONS,
  TOGGLE_LEFT_SIDEBAR,
  TOGGLE_RIGHT_SIDEBAR,
  CHANGE_FOLDER,
  SELECT_FILE,
  SET_FILE_MANAGER_DATA,
  SET_CONTENT_AREA_VIEW,
  SET_RIGHT_PANEL_AREA_VIEW,
  IFRAME_SOURCE,
  SEARCHING_FOR
} from './constants';

function docMgtAppReducer(state = {}, action = {}) {
  switch (action.type) {

  case WINDOW_DIMENSIONS:
    // console.log('WINDOW_DIMENSIONS Action:', action);
    return Object.assign({}, state, {
      windowDimensions: action.value
    });

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
      currentFolderId: action.id
      // currentFolderPath: action.path
    });

  case SELECT_FILE:
    // console.log('SELECT_FILE Action:', action);
    return Object.assign({}, state, {
      currentFileId: action.value,
    });

  case SET_FILE_MANAGER_DATA:
    // console.log('SET_FILE_MANAGER_DATA Action:', action);
    return Object.assign({}, state, {
      docMaster: action.dataMaster,
      docFolders: action.dataFolders,
      docFiles: action.dataFiles,
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
