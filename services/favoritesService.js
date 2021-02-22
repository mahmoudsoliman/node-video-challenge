const { Favorite } = require('../models')
const userService = require('./userService')
const videoService = require('./videoService')

const getUserFavorites = async (userId) => {
  return Favorite.find({user: userId}).populate('video').lean()
}

const addFavorite = async (userId, videoId) => {
  const user = await userService.getUser(userId)
  console.log({user})
  if(!user) return { error: 'user not found'}

  const video = await videoService.getVideoById(videoId)
  console.log({video})
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