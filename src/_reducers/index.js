import { combineReducers } from 'redux';

import { homes } from './home.reducer';

const rootReducer = combineReducers({
  homes
});

export default rootReducer;