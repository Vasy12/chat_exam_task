import ACTION_TYPES from '../actions/actionTypes.js';

const initialState = {
  myChatList: [],
  allAvailableChats: [],
  error: null,
  isFetching: false,
};

function loadUserChatListReducer( state = initialState, action ) {

  switch ( action.type ) {
    case ACTION_TYPES.LOAD_CHAT_LIST_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case ACTION_TYPES.LOAD_CHAT_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        myChatList: action.values
      };
    case ACTION_TYPES.LOAD_CHAT_LIST_ERROR:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };

    case ACTION_TYPES.LOAD_ALL_CHATS_SUCCESS:
      return {
        ...state,
        allAvailableChats: action.data
      };
    case ACTION_TYPES.LOAD_ALL_CHATS_ERROR:
      return{
        ...state,
        error:action.error
      };

    default:
      return state;
  }

}

export default loadUserChatListReducer;