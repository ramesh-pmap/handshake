import { combineReducers } from 'redux';
import ui from './ui';
import folder from './folder';
import global from './global';
import tenant from './tenant';
import auth from './auth';

const rootReducer = combineReducers({
  ui,
  folder,
  global,
  tenant,
  auth
});


export default rootReducer;
