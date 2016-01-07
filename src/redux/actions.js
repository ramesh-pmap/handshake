import { TOGGLE_SIDEBAR, CHANGE_FOLDER, SET_FILE_MANAGER_DATA } from './constants';

 // Action creators
export function toggleSidebar(value) {
  return { type: TOGGLE_SIDEBAR, value };
}

export function changeFolder(id, path, children) {
  return { type: CHANGE_FOLDER, id, path, children };
}

export function setFileManagerData(dataTree, matrix) {
  return { type: SET_FILE_MANAGER_DATA, dataTree, matrix };
}
