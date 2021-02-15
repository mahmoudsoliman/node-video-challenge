const mongoose = require('mongoose')
const faker = require('faker')
const models = require('../../models')

export const cleanUpDB = async () => {
  const modelNames = Object.keys(models)
  for(const modelName of modelNames){
    await models[modelName].deleteMany({})
  }
}

export const generateUser = async (data = {}) => {
  const defaults = {
    name: faker.random.word()
  }

  return models.User.create({
    ...defaults,
    ...data
  })
}

export const generateVideo = async (data = {}) => {
  const defaults = {
    title: faker.random.word(),
    description: faker.random.words(),
    image: faker.image.imageUrl(),
    link_youtube: faker.internet.url()
  }

  return models.Video.create({
    ...defaults,
    ...data
  })
}

export const generateFavorite = async (data = {}) => {
  const defaults = {
    user: data.user? data.user : await generateUser(),
    video: data.video? data.video: await generateVideo()
  }

  return models.Favorite.create({
    ...defaults,
    ...data
  })
}