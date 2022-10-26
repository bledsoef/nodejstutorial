const path = require('path')
const express = require('express')
const router = express.Router()
const rootDir = require('./../util/path')
const adminData = require("./admin")

// / => GET
router.get('/', (req, res, next) => {
    // console.log(adminData.products)
    // res.sendFile(path.join(rootDir, 'views', 'shop.'))
    res.render('shop')
})

module.exports = router