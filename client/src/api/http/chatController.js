import http from "./index";

export const getUserChats = ( userId ) =>
  http.get( '/user_chats', {
    headers: {
      'Content-type': 'application/json',
      'Authorization': userId
    },

  } );

export const getChatMessages = ( { chatId } ) =>
  http.get( `/chat/${chatId}/messages`, {
    headers: {
      'Content-type': 'application/json',
    }
  } );