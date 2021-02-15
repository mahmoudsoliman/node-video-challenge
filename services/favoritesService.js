const { Favorite } = require('../models')
const userService = require('./userService')
const videoService = require('./videoService')

const getUserFavorites = async (userId) => {
  return Favorite.find({user: userId}).populate('video').lean()
}

const addFavorite = async (userId, videoId) => {
  const user = userService.getUser(userId)
  if(!user) return { error: 'user not found'}

  const video = videoService.getVideoById(videoId)
  if(!video) return {error: 'video not found'}

  return Favorite.create({
    user: user._id,
    video: video._id
  })
}

module.exports = {
  getUserFavorites,
  addFavorite
}