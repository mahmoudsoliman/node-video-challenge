const videoService = require('../../services/videoService')

const getVideoById = async (req, res) => {
  const videoId = req.params.id
  try {
    const video = await videoService.getVideoById(videoId)
    if(video)
      res.status(200).send(video)
    else
      res.status(404).send({error: 'Video not found'})
  } catch (error) {
    res.status(500).send({error: 'Something went wrong'})
  }
}

const search = async (req, res) => {
  const query = req.query.query
  try {
    const results = await videoService.search(query)
    res.status(200).send(results)
  } catch (error) {
    res.status(500).send({error: 'Something went wrong'})
  }
}

module.exports = {
  getVideoById,
  search
}