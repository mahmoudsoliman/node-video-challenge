const _ = require('lodash')
const db = require('../utils/db')
const videoService = require('../../services/videoService')
const faker = require('../utils/faker')

describe('Video read tests', () => {
  beforeEach(db.cleanUpDB)
  describe('Search videos tests', () => {
    test('should return list of videos according to search query', async () => {
      const match1 = await db.generateVideo({title: 'Wizeline test video'})
      const match2 = await db.generateVideo({title: 'here is wizeline'})
      await db.generateVideo({title: 'hello world'})

      const videos = await videoService.search('wizeline')
      
      expect(_.isArray(videos)).toBe(true)
      expect(videos.length).toEqual(2)
      expect(videos).toEqual(expect.arrayContaining([match1, match2]))
    })

    test('should return empty list according to search query', async () => {
      const match1 = await db.generateVideo({title: 'Wizeline test video'})
      const match2 = await db.generateVideo({title: 'here is wizeline'})
      await db.generateVideo({title: 'hello world'})

      const videos = await videoService.search('random')
      
      expect(_.isArray(videos)).toBe(true)
      expect(videos.length).toEqual(0)
    })
  })

  describe('Get video by id tests', () => {
    test('should return video details', async () => {
      const match = await db.generateVideo()

      const video = await videoService.getVideoById(match._id)

      expect(video).toEqual(match)
    })
    
    test('should return undefined if video does not exist', () => {
      const video = await videoService.getVideoById(faker.fakeObjectId())

      expect(video).toBe(undefined)
    })    
  })
})