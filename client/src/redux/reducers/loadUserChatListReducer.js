import ACTION_TYPES from '../actions/actionTypes.js';

const initialState = [];

function loadUserChatListReducer(state = initialState, action) {

    switch (action.type) {
        case ACTION_TYPES.LOAD_CHAT_LIST_SUCCESS:
            console.log('Reducer. Action ХУЙ data =', action.values);
            return action.values;
        case ACTION_TYPES.LOAD_CHAT_LIST_ERROR:
            return state;

        default:
            return state;
    }

}

export default loadUserChatListReducer;