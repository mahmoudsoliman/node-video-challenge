const express = require('express');
const userController = require('../controllers/user')

const router = express.Router();

router.get('/:id/favorites', userController.getUserFavorites)

module.exports = router