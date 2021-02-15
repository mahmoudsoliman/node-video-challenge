const videoService = require('../../services/videoService')

const update = async (req, res) => {
  const videoId = req.params.id
  const videoData = req.body
  
  try {
    const updatedVideo = await videoService.updateVideo(videoId, videoData)
    if(updatedVideo)
      res.status(200).send(updatedVideo)
    else
      res.status(404).send({error: 'Video not found'})
  } catch (error) {
    res.status(500).send({error: 'Something went wrong'})
  }
  
}

const create = async (req, res) => {
  const videoData = req.body
  if(!videoData.title) res.status(400).send({error: 'video title is required'})
  if(!videoData.link_youtube) res.status(400).send({error: 'video link_youtube is required'})
  
  try {
    const createdVideo = videoService.createVideo(videoData)
    res.status(201).send(createdVideo)
  } catch (error) {
    res.status(500).send({error: 'Something went wrong'})
  }
  
}

const deleteVideo = async (req, res) => {
  const videoId = req.params.id
  try {
    const { ok } = videoService.deleteVideo(videoId)
    if(ok)
      res.status(200).send()
    else
      res.status(404).send({error: 'Video not found'})
  } catch (error) {
    res.status(500).send({error: 'Something went wrong'})
  }
}

module.exports = {
  create,
  update,
  deleteVideo
}