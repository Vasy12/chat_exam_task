import ACTION_TYPES from './actionTypes.js';

export const createLoadUserChatListAction = ( values ) => ( {
  type: ACTION_TYPES.LOAD_CHAT_LIST_REQUEST,
  values,
} );

export const createLoadUserChatListSuccessAction = ( values ) => ( {
  type: ACTION_TYPES.LOAD_CHAT_LIST_SUCCESS,
  values,
} );

export const createLoadUserChatListErrorAction = ( values ) => ( {
  type: ACTION_TYPES.LOAD_CHAT_LIST_ERROR,
  values,
} );

export const createLoginRequestAction = ( values ) => ( {
  type: ACTION_TYPES.LOGIN_REQUEST,
  values,

} );
export const createSignUpRequestAction = ( values ) => ( {
  type: ACTION_TYPES.SIGN_UP_REQUEST,
  values,

} );

export const createAuthSuccessAction = ( user ) => ( {
  type: ACTION_TYPES.AUTH_SUCCESS,
  user,
} );

export const createAuthErrorAction = ( error ) => ( {
  type: ACTION_TYPES.AUTH_ERROR,
  error,
} );

export const createSelectChatAction = ( chatId ) => ( {
  type: ACTION_TYPES.SELECT_CHAT_ACTION,
  chatId,
} );

export const createLoadChatMessagesSuccessAction = ( data ) => ( {
  type: ACTION_TYPES.LOAD_CHAT_MESSAGES_SUCCESS,
  data
} );

export const createLoadChatMessagesErrorAction = ( error ) => ( {
  type: ACTION_TYPES.LOAD_CHAT_MESSAGES_ERROR,
  error
} );

