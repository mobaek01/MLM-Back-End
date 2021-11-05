const express = require('express')
const bcrypt = require('bcrypt')
const sessions = express.Router()
const User = require('../models/user.js')
const Session = require('../models/sessions.js')

sessions.get('/', (req, res) => {
    Session.find({}, (error, foundSession) => {
        res.json(foundSession)
    })
})

// LOG IN FUNC
sessions.post('/:username', (req, res) => {
    User.findOne({username:req.params.username}, (error, foundUser) => {
        Session.create({currentUser:foundUser, name:foundUser.username,},
            (error, createdSession) => {
            // createdSession.currentUser.push(foundUser)
            res.json(foundUser)
        })
    })
})

// LOG OUT FUNC
sessions.delete('/:name', (req, res) => {
    Session.findOneAndRemove({name:req.params.name}, (error, deletedSession) => {
        console.log('session has been destroyed');
        res.json(deletedSession)
    })
})

sessions.put('/logout/:name', (req, res) => {
    Session.findOneAndUpdate(
        {name:req.params.name},
        {
            loginAccepted: false
        },
        {new:true},
        (error, createdSession) => {
            res.json(createdSession)
    })
})

sessions.get('/:username/:password', (req, res) => {
    User.findOne({username:req.params.username}, (error, foundUser) => {
        if(error) {
            console.log('The database had a problem')
        } else if (!foundUser) {
            console.log('Sorry, your username cannot be found')
        } else {
            if (bcrypt.compareSync(req.params.password, foundUser.password)) {
                // req.session.currentUser = foundUser
                console.log('you are logged in')
            } else {
                console.log('Your password does not match')
            }
        }
    })
})

module.exports = sessions;
