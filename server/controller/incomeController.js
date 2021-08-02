const { Income } = require('../models')

class Controller {

  static async getAllIncomes (req, res, next) {
    try {
      const allIncome = await Income.findAll()
      res.status(200).json({ incomes: allIncome })
    } catch(err) {
      console.log(err)
      // next (err)
    }
  }
}

module.exports = Controller