const bcrypt = require('bcrypt')
const saltRounds = 10

function hashPassword (password) {
  const salt = bcrypt.genSaltSync(saltRounds)
  const hashedPassword = bcrypt.hashSync(password, salt)
  return hashedPassword
}

function comparePass (password, hashedPass) {
  const result = bcrypt.compareSync(password, hashedPass)
  return result
}

module.exports = {
  hashPassword,
  comparePass
}