import { combineReducers } from 'redux';
import ui from './ui';
import folders from './folders';

const rootReducer = combineReducers({
  ui,
  folders
});


export default rootReducer;
