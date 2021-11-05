const express = require('express')
const bcrypt = require('bcrypt')
const sessions = express.Router()
const User = require('../models/user.js')
const Session = require('../models/sessions.js')

// sessions.put('/', (req, res) => {
//     Session.create({currentUser:[]}, (error, createdSession) => {
//         res.json(createdSession)
//     })
// })

// LOG IN FUNC
sessions.post('/:username', (req, res) => {
    User.findOne({username:req.params.username}, (error, foundUser) => {
        Session.create({currentUser:foundUser},
            (error, createdSession) => {
            // createdSession.currentUser.push(foundUser)
            res.json(foundUser)
        })
    })
})

// LOG OUT FUNC
sessions.delete('/:id', (req, res) => {
    Session.findOneAndRemove({_id:req.params.id}, (error, deletedSession) => {
        res.json(deletedSession)
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
