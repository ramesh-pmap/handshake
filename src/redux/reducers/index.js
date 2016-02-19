import { combineReducers } from 'redux';

import ui from './ui';
import tenant from './tenant';
import auth from './auth';
import folder from './folder';
import document from './document';
import global from './global';
import lookups from './lookups';

const rootReducer = combineReducers({
  ui,
  tenant,
  auth,
  folder,
  document,
  global,
  lookups
});


export default rootReducer;
