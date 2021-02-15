const favoriteService = require('../../services/favoritesService')

const addFavorite = async (req, res) => {
  const {
    videoId,
    userId
  } = req.body

  try {
    const favorite = favoriteService.addFavorite(userId, videoId)
    if(favorite.error) res.status(400).send(favorite.error)
    res.status(201).send(favorite)
  } catch (error) {
    res.status(500).send({error: 'Something went wrong'})
  }
}

module.exports = {
  addFavorite
}