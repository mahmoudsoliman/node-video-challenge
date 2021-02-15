const db = require('../utils/db')

describe('Favorites read operations tests', () => {
  beforeEach(db.cleanUpDB)
  describe('Get user favorites tests', () => {
    test('should return array of videos that the user marked as favorite', async () => {
      const user = await db.generateUser()
      //generate video to be user favorite
      const favoriteVideo = await db.generateVideo()
      //generate video that will not be user favorite
      await db.generateVideo()

      //generate user favorite video 
      const favoriteVideo = await db.generateFavorite({user: user._id, video: favoriteVideo._id})

      const favorites = await getUserFavorites(user._id)
      expect(favorites).toEqual([
        favoriteVideo
      ])
    })

    test('should return empty array when user has no favorites', async () => {
      await db.generateUser()
      //generate video not favorite to the user
      await db.generateVideo()

      const favorites = await getUserFavorites(USER_ID)
      expect(favorites).toEqual([])
    })
  })
}) 