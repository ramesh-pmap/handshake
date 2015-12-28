// import { combineReducers } from 'redux';
import { TOGGLE_SIDEBAR} from './constants';
// import { fromJS } from 'immutable';

// const INITIAL_STATE = fromJS({
//   sidebarOpened: false
// });

function toggleSidebarReducer(state = {}, action = {}) {
  switch (action.type) {
  case TOGGLE_SIDEBAR:
    // console.log('Action:', action);
    return Object.assign({}, state, {
      sidebarOpened: !action.value
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

export default toggleSidebarReducer;
