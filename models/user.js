const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Chat = require('../models/chatroom.js')

const userSchema = new Schema({
    username: String,
    password: String,
    messages: [Chat.schema],
    friends:[],
    sessionId:[],
    online: {type:Boolean, default:false},
    away: Boolean,
})

const User = mongoose.model('User', userSchema)
module.exports = User;
