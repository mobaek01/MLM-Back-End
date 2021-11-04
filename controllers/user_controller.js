const express = require('express')
const bcrypt = require('bcrypt')
const users = express.Router()
const User = require('../models/user.js')

users.post('/', (req, res) => {
    // req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    User.create(req.body, (error, createdUser) => {
        res.json(createdUser)

    })
})

module.exports = users;
