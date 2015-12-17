import { TOGGLE_SIDEBAR, UPLOAD_FILE, COMPLETE_UPLOAD } from './constants';
// Other constants
// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// };

 // Action creators
export function ToggleSidebar(value) {
  return { type: TOGGLE_SIDEBAR, value };
}

export function UploadFile(value) {
  return { type: UPLOAD_FILE, value };
}

export function CompleteUpload(value) {
  return { type: COMPLETE_UPLOAD, value };
}
