import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes.js';
import { loginSaga, signUpSaga } from './authSaga.js';
import {loadUserChatListSaga} from "./chatSaga";

export default function * () {
  yield takeLatest(ACTION_TYPES.LOGIN_REQUEST, loginSaga);
  yield takeLatest(ACTION_TYPES.SIGN_UP_REQUEST, signUpSaga);
  yield takeLatest(ACTION_TYPES.LOAD_CHAT_LIST_REQUEST, loadUserChatListSaga);
}