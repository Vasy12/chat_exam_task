import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes.js';
import { loginSaga, signUpSaga }                                       from './authSaga.js';
import {
  loadChatMessagesSaga,
  loadUserChatListSaga,
  getMessageSaga,
  loadAllChatsSaga
} from "./chatSaga";

export default function * () {
  yield takeLatest(ACTION_TYPES.LOGIN_REQUEST, loginSaga);
  yield takeLatest(ACTION_TYPES.SIGN_UP_REQUEST, signUpSaga);
  yield takeLatest(ACTION_TYPES.LOAD_CHAT_LIST_REQUEST, loadUserChatListSaga);
  yield takeLatest(ACTION_TYPES.SELECT_CHAT_ACTION,loadChatMessagesSaga);
  //yield takeLatest(ACTION_TYPES.SEND_MESSAGE_REQUEST, getMessageSaga);
  yield takeLatest(ACTION_TYPES.LOAD_ALL_CHATS_REQUEST,loadAllChatsSaga)
}