const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chatSchema = new Schema({
    username: String,
    message: String,
    likes: Number,
    comments: String,
    fromFriend: Boolean,
    editOn: Boolean
    },
    {timestamps:true}
)

const Chat = mongoose.model('Chat', chatSchema)
module.exports = Chat;
