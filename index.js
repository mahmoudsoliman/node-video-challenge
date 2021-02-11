const express = require('express');
const router = require('./routes')

const app = express();

app.use(router)

app.listen(3005,function(){
  console.log('listening on 3005')
})
