const express = require('express')
const path = require('path')
const productControllers = require('../controllers/products')
const router = express.Router()


router.get("/add-product", productControllers.getAddedProducts)

router.post("/add-product", productControllers.addProduct)

module.exports = router