const _ = require('lodash')
const models = require('../../models')
const db = require('../utils/db')
const videoService = require('../../services/videoService')
const faker = require('../utils/faker')
const { model } = require('mongoose')

describe('Video write tests', () => {
  beforeEach(db.cleanUpDB)
  describe('Create video tests', () => {
    test('should create video', async () => {
      const videoData = faker.fakeVideo()
      await videoService.createVideo({
        title: videoData.title,
        description: videoData.description,
        image: videoData.image,
        link_youtube: videoData.link_youtube
      })

      const dbVideo = await models.Video.findOne().lean()
      expect(dbVideo.title).toEqual(videoData.title)
      expect(dbVideo.description).toEqual(videoData.description)
      expect(dbVideo.image).toEqual(videoData.image)
      expect(dbVideo.link_youtube).toEqual(videoData.link_youtube)
    })
  })

  describe('Update video tests', () => {
    test('should update video', async () => {
      const video = await db.generateVideo({title: 'initial title'})
      const newTitle = 'new title'
      const updatedVideo = await videoService.updateVideo(video._id, {
        title: newTitle,
        description: video.description,
        image: video.image,
        link_youtube: video.link_youtube
      })

      expect(updatedVideo.title).toEqual(newTitle)

      const dbVideo = await models.Video.findOne().lean()
      expect(dbVideo.title).toEqual(newTitle)
    })

    test('should return undefined if video does not exist', async () => {
      const videoData = faker.fakeVideo()
      const updatedVideo = await videoService.updateVideo(videoData._id, {
        title: videoData.title,
        description: videoData.description,
        image: videoData.image,
        link_youtube: videoData.link_youtube
      })

      expect(updatedVideo).toBe(undefined)

      const dbVideo = await models.Video.findOne().lean()
      expect(dbVideo).toBe(undefined)
    })
    
  })

  describe('Delete video tests', () => {
    test('should delete video', async () => {
      const video = await db.generateVideo()

      await videoService.deleteVideo(video._id)

      const dbVideo = await models.Video.findOne().lean()
      expect(dbVideo).toBe(undefined)
    })
  })
})