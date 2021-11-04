const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Chat = ('../models/chatroom.js')

const userSchema = new Schema({
    username: String,
    password: String,
    messages: [Chat],
    friends:[]
})

const User = mongoose.model('User', userSchema)
module.exports = User;
