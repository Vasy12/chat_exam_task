const chatRouter = require('express').Router();
const {findChatById} = require('../middleware/findChatById');
const {joinToChat, createChat, getChat, createMessage, getMessages} = require('../controllers/chat.controller.js');

chatRouter.route('/chat(/:chatId)?')
    .get(getChat)
    .post(createChat);

chatRouter.route('/chat/:chatId/participants')
    .post(findChatById,
        joinToChat);

chatRouter.route('/chat/:chatId/message(/:messageId)?')
    .get(findChatById,
        getMessages)
    .post(findChatById,
        createMessage)


module.exports = chatRouter;