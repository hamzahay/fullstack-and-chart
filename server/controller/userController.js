const { User } = require('../models')
const { comparePass } = require('../helper/bcrypt')
const { generateToken } = require('../helper/jwt')

class Controller {

  static async register (req, res, next) {
    try {
      const { email, password } = req.body
      const newUser = await User.create({ email, password })
      res.status(201).json({
        id: newUser.id,
        email: newUser.email
      })
    } catch (err) {
      console.log(err)
      // next (err)
    }
  }

  static async login (req, res, next) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({ where: { email: email }})
      if (user && comparePass(password, user.password)) {
        const payload = {
          id: user.id,
          email: user.email,
        }
        const access_token = generateToken(payload)
        res.status(200).json({
          id: user.id,
          email: user.email,
          access_token
        })
      } else {
        throw ({ name: 401, message: 'wrong email / password' })
      }
    } catch (err) {
      console.log(err)
      // next (err)
    }
  }
}

module.exports = Controller