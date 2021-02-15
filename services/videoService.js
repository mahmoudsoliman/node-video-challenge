const { Video } = require('../models')

const search = async (query = '') => {
  return Video.find({
    $text: {
      $search: query
    }
  }).lean()
}

const getVideoById = async (videoId) => {
  return Video.findById(videoId).lean()
}

const createVideo = async (video) => {
  return Video.create(video)
}

const updateVideo = async (videoId, video) => {
  return Video.findByIdAndUpdate(videoId, video, { new: true })
}

const deleteVideo = async (videoId) => {
  return Video.deleteOne({_id: videoId})
}

module.exports = {
  search,
  getVideoById,
  createVideo,
  updateVideo,
  deleteVideo
}