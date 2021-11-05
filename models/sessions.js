const mongoose = require('mongoose')
const User = require('../models/user.js')
const Schema = mongoose.Schema

const sessionSchema = new Schema({
    name: String,
    loginAccepted: Boolean,
    currentUser:[User.schema]
})

const Session = mongoose.model('Session', sessionSchema)
module.exports = Session;
