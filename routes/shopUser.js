const express = require('express')
const path = require('path')
const productControllers = require('../controllers/products')

const router = express.Router()

router.get('/', productControllers.getproduct)

module.exports = router