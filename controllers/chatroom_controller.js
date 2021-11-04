const express = require('express')
const router = express.Router()
const Chat = require('../models/chatroom.js')

// CREATE ROUTE
router.post('/', (req, res) => {
    Chat.create(req.body, (error, createdChat) => {
        res.json(createdChat)
    })
})

// READ ROUTE
router.get('/', (req, res) => {
    Chat.find({}, (error, foundChat) => {
        res.json(foundChat)
    })
})

// UPDATE ROUTE
router.put('/:id', (req, res) => {
    Chat.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true},
        (error, updatedChat) => {
            res.json(updatedChat)
        }
    )
})

// DELETE ROUTE
router.delete('/:id', (req, res) => {
    Chat.findByIdAndRemove(
        req.params.id,
        (error, deletedChat) => {
            res.json(deletedChat)
        }
    )
})

module.exports = router;
