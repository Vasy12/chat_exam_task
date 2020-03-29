import ACTION_TYPES from '../actions/actionTypes.js';
import _            from 'lodash';

const initialState = {
  chatMessages: [],
  currentChat: null,
  error: null,
};

function chatsReducer( state = initialState, action ) {

  switch ( action.type ) {

    case ACTION_TYPES.SELECT_CHAT_ACTION:
      return {
        ...state,
        currentChat: action.chatId,
      };

    case ACTION_TYPES.LOAD_CHAT_MESSAGES_SUCCESS:
      const { data } = action;
      return {
        ...state,
        chatMessages: action.data,
      };

    case ACTION_TYPES.LOAD_CHAT_MESSAGES_ERROR:
      console.log( 'LOAD MESSAGES REDUCER. ERROR.ACTION=', action );
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }

}

export default chatsReducer;