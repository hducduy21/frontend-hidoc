import userReducer from './user.js';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    User: userReducer,
});

export default rootReducer;
