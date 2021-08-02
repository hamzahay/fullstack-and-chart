const { User } = require('../models')
const { verifyToken } = require('../helper/jwt')

async function authenticate (req, res, next) {
  try {
    if (!req.headers.access_token) throw ({ name: 401, message: 'please login first' })
    const payload = verifyToken(req.headers.access_token)
    const user = await User.findOne({ where: { email: payload.email }})
    if (user) {
      req.user = user
      next()
    } else {
      throw ({ name: 401, message: 'unauthorize' })
    }
  } catch (err) {
    console.log(err)
    // next (err)
  }
}

module.exports = {
  authenticate
}