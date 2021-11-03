const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()




app.listen(PORT, () => {
    console.log('Listening on port...', PORT);
})
