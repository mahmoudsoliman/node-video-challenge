const db = require('../utils/db')
const favoriteService = require('../../services/favoritesService')
const { Favorite } = require('../../models')
const faker = require('../utils/faker')

describe('Write favorite tests', () => {
  describe('create favorite tests', () => {
    afterEach(async () => await db.cleanUpDB())
    test('should add new favorite', async () => {
      const user = await db.generateUser()
      const video = await db.generateVideo()

      const favorite = await favoriteService.addFavorite(user._id, video._id)
      expect(favorite.user.toString()).toEqual(user._id.toString())
      expect(favorite.video.toString()).toEqual(video._id.toString())

      const dbFavorite = await Favorite.findById(favorite._id).lean()
      expect(dbFavorite).not.toBe(null)
    })
    
    test('should return error when user not found', async () => {
      const userId = faker.fakeObjectId()
      const video = await db.generateVideo()

      const favorite = await favoriteService.addFavorite(userId, video._id)
      expect(favorite.error).toEqual('user not found')
    })
    
    test('should return error when video not found', async () => {
      const user = await db.generateUser()
      const videoId = faker.fakeObjectId()

      const favorite = await favoriteService.addFavorite(user._id, videoId)

      expect(favorite.error).toEqual('video not found')
    })
  })
})