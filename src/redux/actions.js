import { TOGGLE_SIDEBAR, UPLOAD_FILE, COMPLETE_UPLOAD, CHANGE_FOLDER } from './constants';

 // Action creators
export function toggleSidebar(value) {
  return { type: TOGGLE_SIDEBAR, value };
}

export function changeFolder(path, children) {
  return { type: CHANGE_FOLDER, path, children };
}

export function uploadFile(value) {
  return { type: UPLOAD_FILE, value };
}

export function completeUpload(value) {
  return { type: COMPLETE_UPLOAD, value };
}
