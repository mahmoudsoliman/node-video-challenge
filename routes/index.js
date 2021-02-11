const express = require('express');
const videoRouter = require('./video')
const userRouter = require('./user')

const router = express.Router();

router.use('/video', videoRouter)
router.use('/user', userRouter)

module.exports = router