const express = require('express')
const User = require('../models/user.js')
const friends = express.Router()


//----------------------Add Friend------------

friends.post('/:username/:friend', (req, res) => {
   User.findOne({username:req.params.username}, (error, foundUser) => {
      User.findOne({username:req.params.friend}, (error, foundFriend) => {
         foundUser.friends.push(foundFriend)
         foundUser.save()
         res.json(foundUser)
      })
   })
})
//-----------------Remove Friend--------
friends.put('/:username/:name', (req, res) => {
   User.findOne({username:req.params.username}, (error, foundUser) => {
       console.log("am i working");
      const findIndex = () => {//find the index to splice out
         for (let i = 0; i<foundUser.friends.length; i++) {
            if(foundUser.friends[i].username == req.params.name){
               console.log(`found friend at ${i}`);
               return i
            }
         }
      }
      foundUser.friends.splice(findIndex(), 1)
      foundUser.save()
      res.json(foundUser)
   })
})


module.exports = friends;
