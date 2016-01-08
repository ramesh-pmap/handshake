import { TOGGLE_SIDEBAR, CHANGE_FOLDER, SET_FILE_MANAGER_DATA } from './constants';

 // Action creators
export function toggleSidebar(value) {
  return { type: TOGGLE_SIDEBAR, value };
}

export function changeFolder(path) {
  return { type: CHANGE_FOLDER, path };
}

export function setFileManagerData(dataTree, matrix) {
  return { type: SET_FILE_MANAGER_DATA, dataTree, matrix };
}
