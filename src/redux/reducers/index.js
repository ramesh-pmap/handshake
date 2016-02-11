import { combineReducers } from 'redux';
import ui from './ui';
import folders from './folders';
import global from './global';
import tenant from './tenant';
import auth from './auth';

const rootReducer = combineReducers({
  ui,
  folders,
  global,
  tenant,
  auth
});


export default rootReducer;
