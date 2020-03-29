const chatRouter = require('express').Router();
const {findChatById} = require('../middleware/findChatById');
const {joinToChat, createChat, getChatById, createMessage, getMessages, leaveChat, getChatByUserId} = require('../controllers/chat.controller.js');

chatRouter.route('/user_chats')
    . get(getChatByUserId);

chatRouter.route('/chat(/:chatId)?')
    .get(getChatById)
    .post(createChat);

chatRouter.route('/chat/:chatId/participants')
    .post(findChatById,
        joinToChat)
    .delete(findChatById,
        leaveChat);

chatRouter.route('/chat/:chatId/messages(/:messageId)?')
    .get(findChatById,
        getMessages)
    .post(findChatById,
        createMessage);


module.exports = chatRouter;