import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import fetchingData from './fetchingData';
import page2Content from './page2Content';
import user from './user';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  fetchingData,
  page2Content,
  user
});

export default rootReducer;
