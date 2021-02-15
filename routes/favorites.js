const express = require('express');
const favoritesController = require('../controllers/favorites')

const router = express.Router();

router.get('/', favoritesController.getUserFavorites)

module.exports = router