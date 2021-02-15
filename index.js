const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const router = require('./routes')
const keys = require('./config/keys')

mongoose.connect(keys.mongoURI, { useNewUrlParser: true })

const app = express();

app.use(bodyParser.json())
app.use(router)

app.listen(3005,function(){
  console.log('listening on 3005')
})
