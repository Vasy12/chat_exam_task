import { put } from 'redux-saga/effects';
import { createAuthErrorAction, createAuthSuccessAction } from '../actions';
import { loginUser, signUpUser } from '../../api/http/authController.js';

export function * loginSaga ({ values }) {
  try {
    const { data } = yield loginUser(values);
   /* const { userChats } = yield getUserChats(data.user.id);
    yield console.log(data,userChats);*/

    yield put(createAuthSuccessAction(data));
  } catch (e) {
    yield put(createAuthErrorAction(e.response));
  }
}

export function * signUpSaga ({ values }) {
  try {
    const { data } = yield signUpUser(values);
    yield put(createAuthSuccessAction(data));
  } catch (e) {
    yield put(createAuthErrorAction(e.response));
  }
}

