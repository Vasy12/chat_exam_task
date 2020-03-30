import ACTION_TYPES from '../actions/actionTypes.js';
import _            from "lodash";

const initialState = {
  notifications: [],
  error: null,
};

function notificationReducer( state = initialState, action ) {
  switch ( action.type ) {
    case ACTION_TYPES.GET_NOTIFICATION_SUCCESS:
      const { message, chatId } = action;
      const newNotif = {
        message,
        chatId
      };

      return {
        notifications: [ ...state.notifications, newNotif ]
      };
    case ACTION_TYPES.DELETE_NOTIFICATION_ACTION:
      const { messageId } = action;

      const newNotificationList = _.clone( state.notifications );
      newNotificationList.splice( newNotificationList.findIndex( notif => notif.message._id === messageId ),
        1 );

      return {
        ...state,
        notifications: newNotificationList
      };

    default:
      return state;
  }
}

export default notificationReducer;
