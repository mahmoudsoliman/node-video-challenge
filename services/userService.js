const { User } = require('../models')

const getUser = async (userId) => {
  return User.findById(userId).lean()
}

module.exports = {
  getUser
}