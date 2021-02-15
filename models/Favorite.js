const mongoose = require('mongoose')

const favoriteSchema = new mongoose.Schema({ 
  video: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Video'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite