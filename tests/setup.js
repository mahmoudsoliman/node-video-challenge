const mongoose = require('mongoose')
const keys = require('../config/keys')
console.log(keys.mongoURI)
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })