const asyncHandler = require('express-async-handler')
const favoriteService = require('../../services/favoritesService')

const addFavorite = async (req, res) => {
  const {
    videoId,
    userId
  } = req.body

  const favorite = favoriteService.addFavorite(userId, videoId)
  if(favorite.error){
    res.status(400)
    return favorite
  } 
  res.status(201)
  return favorite
}

module.exports = {
  addFavorite: asyncHandler(addFavorite)
}