import ACTION_TYPES from '../actions/actionTypes.js';
import _            from 'lodash';

const initialState = {
  chatMessages: [],
  currentChat: null,
  error: null,
};

//ОПРЕДЕЛЯТЬ ПО chatId пушить или нет notifications

function chatReducer( state = initialState, action ) {
  switch ( action.type ) {

    case ACTION_TYPES.SELECT_CHAT_ACTION:
      return {
        ...state,
        currentChat: action.chatId,
      };

    case ACTION_TYPES.LOAD_CHAT_MESSAGES_SUCCESS:
      return {
        ...state,
        chatMessages: action.data,
      };

    case ACTION_TYPES.LOAD_CHAT_MESSAGES_ERROR:
      return {
        ...state,
        error: action.error
      };

    case ACTION_TYPES.SEND_MESSAGE_SUCCESS:
      const newMessage = action.data;
      const newChatMessages = _.clone( state.chatMessages );
      //Если сообщение новое - добавить в массив. Если нет- вернуть state
      const index = newChatMessages.findIndex( ( msg ) => msg._id === newMessage._id );
      if( index === -1 ) {
        newChatMessages.push( newMessage );
        return {
          ...state,
          chatMessages: newChatMessages,
        };
      }
      return { ...state };

    case ACTION_TYPES.SEND_MESSAGE_ERROR:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }

}

export default chatReducer;