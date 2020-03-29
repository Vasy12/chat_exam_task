import {put} from 'redux-saga/effects';
import {
    createLoadUserChatListErrorAction,
    createLoadUserChatListSuccessAction
} from '../actions';
import {getUserChats} from "../../api/http/authController";

export function* loadUserChatListSaga({values}) {
    try {
        const {data} = yield getUserChats(values);
        yield put(createLoadUserChatListSuccessAction(data));
    } catch (e) {
        yield put(createLoadUserChatListErrorAction(e.response));
    }
}
