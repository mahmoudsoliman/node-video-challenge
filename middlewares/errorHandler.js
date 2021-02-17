
const errorHandler =  async (req, res, next) => {
  try {
    const data = await next()
    res.send(data)
  } catch (error) {
    res.status(500).send({error: 'Something went wrong'})
  }
}

module.exports = errorHandler