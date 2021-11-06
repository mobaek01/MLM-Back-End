const express = require('express')
const bcrypt = require('bcrypt')
const users = express.Router()
const User = require('../models/user.js')

//---------------Find all users------------------
users.get('/', (req, res) => {
    User.find({}, (error, foundUser) => {
        res.json(foundUser)
    })
})
//==================Create User====================
users.post('/', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    User.create(req.body, (error, createdUser) => {
        console.log('user info has been created', createdUser);
        res.json(createdUser)
    })
})

//======================Log in==============================
// users.put('/login/:username', (req, res) => {
//     User.findOneAndUpdate(
//         {username: req.params.username},
//         {online: true},
//         (error, changedStatus) => {
//             res.json(changedStatus)
//     })
// })

//=====================Log out================
// users.put('/logout/:username', (req, res) => {
//     User.findOneAndUpdate(
//         {username: req.params.username},
//         {online: false},
//         (error, changedStatus) => {
//             res.json(changedStatus)
//     })
// })

module.exports = users;
