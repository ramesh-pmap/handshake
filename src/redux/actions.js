import { TOGGLE_SIDEBAR, UPLOAD_FILE, COMPLETE_UPLOAD } from './constants';

 // Action creators
export function toggleSidebar(value) {
  return { type: TOGGLE_SIDEBAR, value };
}

export function uploadFile(value) {
  return { type: UPLOAD_FILE, value };
}

export function completeUpload(value) {
  return { type: COMPLETE_UPLOAD, value };
}
