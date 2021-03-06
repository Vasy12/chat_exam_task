const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userRef = {
    type: Schema.Types.ObjectId,
    ref: 'User',
};

const messageSchema = new Schema({
    authorId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    body: {
        type: Schema.Types.String,
        default: '',
    },
    files: [Schema.Types.String],
    createdAt: Schema.Types.Date,
    updatedAt: Schema.Types.Date,
}, {
    timestamps: true,
});

const chatSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true,
        match: /^[a-zA-Z 0-9_-]{3,15}$/,
    },
    owner: {
        ...userRef,
        required: true,
    },
    users: [
        userRef
    ],
    messages: [messageSchema],
    createdAt: Schema.Types.Date,
    updatedAt: Schema.Types.Date,
}, {
    timestamps: true,
});

const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;
