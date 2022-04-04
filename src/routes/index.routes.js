const express = require('express')
const router = express.Router()
const {evaluateExpression, calculate} = require('../controllers/index.controller')

router.post('/calculate', calculate)

router.post('/vizualize-calculation', evaluateExpression)

module.exports = {
  applicationRoutes: router
}