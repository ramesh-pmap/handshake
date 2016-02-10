import { combineReducers } from 'redux';
import ui from './ui';
import folders from './folders';
import global from './global';

const rootReducer = combineReducers({
  ui,
  folders,
  global
});


export default rootReducer;
