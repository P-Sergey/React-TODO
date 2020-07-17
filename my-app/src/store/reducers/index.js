import { combineReducers } from 'redux';
import todo from './todo';
import filter from './filter';
import posts from './posts';

export default combineReducers({ todo, filter, posts });
