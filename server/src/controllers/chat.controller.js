const Chat = require('../models/Chat.js');
const User = require('../models/User.js');
const { BadRequestError } = require('../utils/errors');

module.exports.createChat = async (req, res, next) => {
    try {

        const {headers: {authorization: userId,}, body} = req;

        const chat = await Chat.create({
            ...body,
            owner: userId,
        });

        if (chat) {
            return res.status(201).send(chat);
        }

    } catch (e) {
        res.status(400).send(e);
    }
};

module.exports.getChat = async (req, res, next) => {
    try {
        const chat = await Chat.findById(req.params.chatId)
            .populate('participants', {
                chats: 0,
            })
            .populate('owner', {
                chats: 0,
            });
        res.send(chat);
    } catch (e) {
        res.send(e);
    }
};

module.exports.joinToChat = async (req, res, next) => {
    try {
        const {headers: {authorization: userId}, chat} = req;

        chat.participants.push(userId);
        const savedChat = await chat.save();
        if (savedChat) {
            const chatWithOwner = await Chat.findOne(chat)
                .populate('owner')
                .populate('participants');
            return res.send(chatWithOwner);
        }
        res.status(400).send('Bad request');
    } catch (e) {
        res.status(400).send(e);
    }
};

module.exports.createMessage = async (req, res, next) => {
    try {
        const {headers: {authorization: userId}, chat} = req;

        const message = {
            authorId: userId,
            body: req.body.messageBody,
            timestamp: Date.now(),
        };

        chat.messages.push(message);

        const savedMessage = await chat.save();
        if (savedMessage) {
            return res.status(201).send(savedMessage);
        }

    } catch (e) {
        res.send(e)
    }
};

module.exports.getMessages = async (req, res, next) => {
    try {
        const {chat: {messages}} = req;

        if (messages) {
            return res.status(200).send(messages)
        }
        res.send('Chat not found or there is no message');
    } catch (e) {
        res.status(500).send(e)
    }
};