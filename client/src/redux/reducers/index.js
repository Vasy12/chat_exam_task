import { combineReducers } from 'redux';
import authReducer from './authReducer.js';
import chatsReducer from './chatReducer.js';
import loadUserChatListReducer from "./loadUserChatListReducer";

export default combineReducers({
  auth: authReducer,
  chats: chatsReducer,
  chatList: loadUserChatListReducer,
});