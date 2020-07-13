import { combineReducers } from 'redux';
import todo from './todo';
import filter from './filter';

const index = combineReducers({ todo, filter });

export default index;
