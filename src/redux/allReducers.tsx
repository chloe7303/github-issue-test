import reducer from './user/reducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  user: reducer,
});

export default allReducers;
