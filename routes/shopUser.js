const express = require('express')
const path = require('path')

const adminData = require('./admin')

const router = express.Router()

router.get("/", (req, res, next) => {
    const products = adminData.products
    res.render('shop', { 
        prods: products,
        pageTitle: 'tota shop',
        path: "/",
        hasProds: products.length > 0,
        layout: false})
})

module.exports = router