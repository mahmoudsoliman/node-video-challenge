const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const router = require('./routes')
const keys = require('./config/keys')
const errorHandler = require('./middlewares/errorHandler')

mongoose.connect(keys.mongoURI, { useNewUrlParser: true })

const app = express();

app.use(bodyParser.json())
app.use(errorHandler)
app.use(router)

app.listen(3005,function(){
  console.log('listening on 3005')
})
