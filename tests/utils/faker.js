const mongoose = require('mongoose')
const faker = require('faker')

const fakeObjectId = () => mongoose.Types.ObjectId()

const fakeFavorite = (user) => {
  return {
    _id: mongoose.Types.ObjectId(),
    video: fakeVideo(),
    user
  }
}

const fakeVideo = () => {
  return {
    _id: mongoose.Types.ObjectId(),
    title: faker.random.word(),
    description: faker.random.words(),
    image: faker.image.imageUrl(),
    link_youtube: faker.internet.url()
  }
}

module.exports = {
  fakeObjectId,
  fakeFavorite,
  fakeVideo
}