const favoriteServicce = require('../../services/favoritesService')

const getUserFavorites = async (req, res) => {
  const userId = req.params.userId
  try {
    const results = await favoriteServicce.getUserFavorites(userId)
    res.status(200).send(results)
  } catch (error) {
    res.status(500).send({error: 'Something went wrong'})
  }
  
}

module.exports = {
  getUserFavorites
}