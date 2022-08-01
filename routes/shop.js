const express = require('express')

const router = express.Router()

const shopController = require('../controllers/shop')

router.get('/',shopController.getProducts)

router.get('/product/:prodId', shopController.getSingleProduct)

module.exports = router