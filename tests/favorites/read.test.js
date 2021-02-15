const _ = require('lodash')
const db = require('../utils/db')
const favoriteServicce = require('../../services/favoritesService')

describe('Favorites read operations tests', () => {
  afterEach(db.cleanUpDB)
  describe('Get user favorites tests', () => {
    test('should return array of videos that the user marked as favorite', async () => {
      const user = await db.generateUser()
      //generate video to be user favorite
      const video = await db.generateVideo()
      //generate video that will not be user favorite
      await db.generateVideo()

      //generate user favorite video 
      const favoriteVideo = await db.generateFavorite({user: user._id, video: video._id})

      const favorites = await favoriteServicce.getUserFavorites(user._id)
      
      expect(_.isArray(favorites)).toBe(true)
      expect(favorites.length).toEqual(1)
      expect(favorites[0].user.toString()).toEqual(user._id.toString())
      expect(favorites[0].video._id.toString()).toEqual(video._id.toString())
    })

    test('should return empty array when user has no favorites', async () => {
      const user = await db.generateUser()
      //generate video not favorite to the user
      await db.generateVideo()

      const favorites = await favoriteServicce.getUserFavorites(user._id)
      expect(favorites).toEqual([])
    })
  })
}) 