import { put } from 'redux-saga/effects';
import {
  createLoadChatMessagesErrorAction,
  createLoadChatMessagesSuccessAction,
  createLoadUserChatListErrorAction,
  createLoadUserChatListSuccessAction
}              from '../actions';
import {
  getChatMessages,
  getUserChats
}              from "../../api/http/chatController";

export function* loadUserChatListSaga( { values } ) {
  try {
    const { data } = yield getUserChats( values );
    yield put( createLoadUserChatListSuccessAction( data ) );
  } catch ( e ) {
    yield put( createLoadUserChatListErrorAction( e.response ) );
  }
}

export function* loadChatMessagesSaga( chatId ) {
  try {
    const { data } = yield getChatMessages( chatId );
    yield put( createLoadChatMessagesSuccessAction( data ) )
  } catch ( e ) {
    yield put( createLoadChatMessagesErrorAction( e ) )
  }
}
