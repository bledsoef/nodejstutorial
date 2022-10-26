const path = require('path')
const express = require('express')
const router = express.Router()
const rootDir = require('../util/path')

const products = []

// /admin/add-products => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
})

// /admin/add-products => POST
router.post('/add-product', (req, res, next) => {
    products.push({title:req.body.title})
    res.redirect("/")
})

exports.router = router
exports.products = products