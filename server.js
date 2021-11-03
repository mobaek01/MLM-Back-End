//// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

//// CONFIGURATIONS
const app = express()
const db = mongoose.connection;
require('dotenv').config()
const PORT = process.env.PORT || 3003;
const MONGODB_URI = process.env.MONGODB_URI;

//// MIDDLEWARE
app.use(express.json())
app.use(cors())

//// CONTROLLERS
const chatroomController = require('./controllers/chatroom_controller.js')
app.use('/chatrooms', chatroomController)

//// CONNECTIONS
app.listen(PORT, () => {
    console.log('Listening on port...', PORT);
})
mongoose.connect(MONGODB_URI)

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));
