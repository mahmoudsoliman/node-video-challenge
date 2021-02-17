//const asyncHandler = require('express-async-handler')
const videoService = require('../../services/videoService')

const getVideoById = async (req, res) => {
  const videoId = req.params.id
  const video = await videoService.getVideoById(videoId)
  if(video){
    return video
  }
  else{
    res.status(404)
    return {error: 'Video not found'}
  }
}

const search = async (req, res) => {
  const query = req.query.query
  const results = await videoService.search(query)
  return results
}

module.exports = {
  getVideoById,
  search
}