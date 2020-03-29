import ACTION_TYPES from '../actions/actionTypes.js';

const initialState = {
  list: [],
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
        list: action.values
      };
    case ACTION_TYPES.LOAD_CHAT_LIST_ERROR:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };

    default:
      return state;
  }

}

export default loadUserChatListReducer;