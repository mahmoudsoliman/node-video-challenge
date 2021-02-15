const video = require('.')
const videoService = require('../../services/videoService')

const update = async (req, res) => {
  const videoId = req.params.videoId
  const videoData = req.body
  return videoService.updateVideo(videoId, videoData)
}

const create = async (req, res) => {
  const videoData = req.body
  return videoService.createVideo(videoData)
}

const deleteVideo = async (req, res) => {
  const videoId = req.params.id
  return videoService.deleteVideo(videoId)
}

module.exports = {
  create,
  update,
  deleteVideo
}