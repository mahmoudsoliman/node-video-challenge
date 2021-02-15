const favoriteServicce = require('../../services/favoritesService')

const getUserFavorites = async (req, res) => {
  const userId = req.userId
  return favoriteServicce.getUserFavorites(userId)
}

module.exports = {
  getUserFavorites
}