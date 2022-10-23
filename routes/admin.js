const express = require('express')
const router = express.Router()

// /admin/add-products => GET
router.get('/add-product', (req, res, next) => {
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">The add product page</submit></input></form>')
});

// /admin/add-products => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body)
    res.redirect("/")
})

module.exports = router