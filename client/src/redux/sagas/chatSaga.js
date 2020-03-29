import { put }         from 'redux-saga/effects';
import {
  createLoadChatMessagesErrorAction,
  createLoadChatMessagesSuccessAction,
  createLoadUserChatListErrorAction,
  createLoadUserChatListSuccessAction,
  createGetMessageErrorAction,
  createGetMessageSuccessAction,
  createLoadAllChatSuccess, createLoadAllChatError
} from '../actions';
import {
  getAllAvailableChats,
  getChatMessages,
  getUserChats
} from "../../api/http/chatController";
import { emitMessage } from "../../api/ws/chatApi";

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

export function* loadAllChatsSaga(  ) {
  try {
    const {data}  = yield getAllAvailableChats();
    yield put( createLoadAllChatSuccess( data ) )
  } catch ( e ) {
    yield put( createLoadAllChatError( e ) )
  }
}


/*

export function* getMessageSaga(data) {
  try {
    yield put( createGetMessageSuccessAction( data ) )
  } catch ( e ) {
    yield put( createGetMessageErrorAction( e ) )
  }
}

*/