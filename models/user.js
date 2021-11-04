const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Chat = require('../models/chatroom.js')

const userSchema = new Schema({
    username: String,
    password: String,
    messages: [Chat.schema],
    friends:[]
})

const User = mongoose.model('User', userSchema)
module.exports = User;
