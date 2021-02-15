const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({ 
  title: 'string',
  description: 'string',
  image: 'string',
  link_youtube: 'string'
})

videoSchema.index({title: 'text'})

const Video = mongoose.model('Video', videoSchema);

module.exports = Video