import { combineReducers } from 'redux';
import authReducer         from './authReducer.js';
import chatReducer         from './chatReducer.js';
import chatListReducer     from "./chatListReducer";

export default combineReducers( {
  auth: authReducer,
  chat: chatReducer,
  chatList: chatListReducer,
} );