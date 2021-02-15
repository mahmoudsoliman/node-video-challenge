const { Favorite } = require('../models')
const getUserFavorites = async (userId) => {
  return Favorite.find({user: userId}).populate('video').lean()
}

module.exports = {
  getUserFavorites
}