const { Video } = require('../models')

const search = async (query = '') => {
  const results = await Video.find({
    $text: {
      $search: query
    }
  }).lean()

  return results.map(video => {
    return {
      _id: video._id,
      title: video.title,
      description: video.description,
      image: video.image,
      link_youtube: video.link_youtube
    }
  })
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