// import { combineReducers } from 'redux';
import { TOGGLE_SIDEBAR, CHANGE_FOLDER, SET_FILE_MANAGER_DATA } from './constants';
// import { fromJS } from 'immutable';

// const INITIAL_STATE = fromJS({
//   sidebarOpened: false
// });

function docMgtAppReducer(state = {}, action = {}) {
  switch (action.type) {
  case TOGGLE_SIDEBAR:
    // console.log('Action:', action);
    return Object.assign({}, state, {
      sidebarOpened: !action.value
    });
  case CHANGE_FOLDER:
    // console.log('Action:', action);
    return Object.assign({}, state, {
      currentFolderId: action.id,
      currentFolderPath: action.path,
      currentFolderChildren: action.children
    });
  case SET_FILE_MANAGER_DATA:
    // console.log('Action:', action);
    return Object.assign({}, state, {
      fileManager: action.dataTree,
      fileMatrix: action.matrix
    });
  default:
    return state;
  }
}

// function fileUploadReducer(state = [], action) {
//   switch (action.type) {
//   case UPLOAD_FILE:
//     return [
//       ...state,
//       {
//         text: action.text,
//         completed: false
//       }
//     ];
//   case COMPLETE_UPLOAD:
//     return [
//       ...state.slice(0, action.index),
//       Object.assign({}, state[action.index], {
//         completed: true
//       }),
//       ...state.slice(action.index + 1)
//     ];
//   default:
//     return state;
//   }
// }

// const DocMgtApp = combineReducers({
//   toggleSidebarReducer,
//   fileUploadReducer
// });

export default docMgtAppReducer;
