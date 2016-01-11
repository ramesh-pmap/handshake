import {
  TOGGLE_LEFT_SIDEBAR,
  TOGGLE_RIGHT_SIDEBAR,
  CHANGE_FOLDER,
  SET_FILE_MANAGER_DATA,
  SET_SIDEBAR_HEIGHT,
  SET_CONTENT_AREA_VIEW,
  SET_RIGHT_PANEL_AREA_VIEW,
  IFRAME_SOURCE
} from './constants';

 // Action creators
export function toggleLeftSidebar(value) {
  return { type: TOGGLE_LEFT_SIDEBAR, value };
}
export function toggleRightSidebar(value) {
  return { type: TOGGLE_RIGHT_SIDEBAR, value };
}

export function changeFolder(path) {
  return { type: CHANGE_FOLDER, path };
}

export function setFileManagerData(dataTree, matrix) {
  return { type: SET_FILE_MANAGER_DATA, dataTree, matrix };
}

export function setSidebarHeight(value) {
  return { type: SET_SIDEBAR_HEIGHT, value };
}

export function setContentAreaView(value) {
  return { type: SET_CONTENT_AREA_VIEW, value };
}

export function setRightPanelAreaView(value) {
  return { type: SET_RIGHT_PANEL_AREA_VIEW, value };
}

export function changeFrameSource(value) {
  return { type: IFRAME_SOURCE, value };
}
