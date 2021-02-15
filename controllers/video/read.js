const videoService = require('../../services/videoService')

const getVideoById = async (req, res) => {
  const videoId = req.params.id
  return videoService.getVideoById(videoId)
}

const search = async (req, res) => {
  const query = req.query.query
  return videoService.search(query)
}

module.exports = {
  getVideoById,
  search
}