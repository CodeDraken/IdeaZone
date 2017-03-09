import { combineReducers } from 'redux';
import ideasReducer from './ideas_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
  ideas: ideasReducer,
  user: userReducer
});

export default rootReducer;