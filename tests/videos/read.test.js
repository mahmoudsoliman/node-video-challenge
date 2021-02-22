const _ = require('lodash')
const db = require('../utils/db')
const videoService = require('../../services/videoService')
const faker = require('../utils/faker')

describe('Video read tests', () => {
  describe('Search videos tests', () => {
    afterEach(async () => await db.cleanUpDB())
    
    test('should return list of videos according to search query', async () => {
      const match1 = await db.generateVideo({title: 'Wizeline test video'})
      const match2 = await db.generateVideo({title: 'here is wizeline'})
      const expectedResults = [match1, match2].map(video => {
        return {
          _id: video._id,
          title: video.title,
          description: video.description,
          image: video.image,
          link_youtube: video.link_youtube
        }
      })
      await db.generateVideo({title: 'hello world'})

      const videos = await videoService.search('wizeline')

      
      expect(_.isArray(videos)).toBe(true)
      expect(videos.length).toEqual(2)
      
      expect(_.sortBy(videos, 'title')).toEqual(_.sortBy(expectedResults, 'title'))
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
    afterEach(async () => await db.cleanUpDB())
    test('should return video details', async () => {
      const match = await db.generateVideo()

      const video = await videoService.getVideoById(match._id)

      expect(video._id.toString()).toEqual(match._id.toString())
      expect(video.title).toEqual(match.title)
      expect(video.description).toEqual(match.description)
      expect(video.image).toEqual(match.image)
      expect(video.link_youtube).toEqual(match.link_youtube)
    })
    
    test('should return null if video does not exist', async () => {
      const video = await videoService.getVideoById(faker.fakeObjectId())

      expect(video).toBe(null)
    })    
  })
})