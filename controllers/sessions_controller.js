const express = require('express')
const sessions = express.Router()
const User = require('../models/user.js')

// sessions.post('/', (req, res) => {
//     User.findOne({username:req.body.username}, (error, foundUser) => {
//         if(error) {
//             alert('The database had a problem')
//         } else if (!foundUser) {
//             alert('Sorry, your username cannot be found')
//         } else {
//             if (bcrypt.compareSync(req.body.password, foundUser.password)) {
//                 req.session.currentUser = foundUser
//                 res.redirect('/chatrooms')
//             } else {
//                 alert('Your password does not match')
//             }
//         }
//     })
// })
//
// sessions.delete('/', (req, res) => {
//     req.session.destroy((error, data) => {
//         res.redirect('/chatrooms')
//     })
// })

module.exports = sessions;
