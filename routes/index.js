const express = require('express');
const videoRouter = require('./video')
const favoritesRouter = require('./favorites')

const router = express.Router();

router.use('/video', videoRouter)
router.use('/favorites', favoritesRouter)

module.exports = router