import {combineReducers} from 'redux';
import postReducer from './postReducer';
import fetchUserReducer from './fetchUserReducer';

export default combineReducers({
    posts: postReducer,
    users : fetchUserReducer
})