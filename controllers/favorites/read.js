//const asyncHandler = require('express-async-handler')
const favoriteServicce = require('../../services/favoritesService')

const getUserFavorites = async (req, res) => {
  const userId = req.userId
  const favorites = await favoriteServicce.getUserFavorites(userId)
  return favorites
}

module.exports = {
  getUserFavorites
}