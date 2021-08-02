const router = require('express').Router()
const userRoutes = require('./userRoutes')
const { authenticate } = require('../middleware/auth')
const IncomeController = require('../controller/incomeController')

router.use('/', userRoutes)
router.use(authenticate)
router.get('/incomes', IncomeController.getAllIncomes)

module.exports = router