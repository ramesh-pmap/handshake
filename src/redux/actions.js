import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from '../constants';
// Other constants
// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// };

 // Action creators
export function OpenSidebar(value) {
  return { type: OPEN_SIDEBAR, value };
}

export function CloseSidebar(value) {
  return { type: CLOSE_SIDEBAR, value };
}
