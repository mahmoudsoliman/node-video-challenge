const asyncHandler = require('express-async-handler')
const videoService = require('../../services/videoService')

const update = async (req, res) => {
  const videoId = req.params.id
  const videoData = req.body
  
  const updatedVideo = await videoService.updateVideo(videoId, videoData)
  if(updatedVideo){
    return updatedVideo
  }
  else{
    res.status(404)
    return {error: 'Video not found'}
  }
}

const create = async (req, res) => {
  const videoData = req.body
  if(!videoData.title){
     res.status(400)
     return {error: 'video title is required'}
  }
  if(!videoData.link_youtube){
     res.status(400)
     return {error: 'video link_youtube is required'}
  }
  
  const createdVideo = videoService.createVideo(videoData)
  res.status(201)
  return createdVideo
}

const deleteVideo = async (req, res) => {
  const videoId = req.params.id
  const { ok } = videoService.deleteVideo(videoId)
  if(!ok){
    res.status(404)
    return {error: 'video not found'}
  }
}

module.exports = {
  create: asyncHandler(create),
  update: asyncHandler(update),
  deleteVideo: asyncHandler(deleteVideo)
}