const express = require('express');
const mongoose = require('mongoose')
const router = require('./routes')
const keys = require('./config/keys')

mongoose.connect(keys.mongoURI, { useMongoClient: true });

const app = express();

app.use(router)

app.listen(3005,function(){
  console.log('listening on 3005')
})
