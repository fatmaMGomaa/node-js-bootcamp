const   Product = require('../models/product')

exports.getAddedProducts = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'ADD PRODUCT',
        path: "/admin/add-product",
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    })
}

exports.addProduct = (req, res, next) => {
    const product = new Product(req.body.title)
    product.save()
    res.redirect("/")
}

exports.getproduct = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop', {
            prods: products,
            pageTitle: 'tota shop',
            path: "/",
            hasProds: products.length > 0,
            activeShop: true,
            productCSS: true
        })
    })
}