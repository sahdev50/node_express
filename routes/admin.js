const express = require('express')

const router = express.Router()

router.get('/add-product', (req, res, next)=>{
    res.send("<html><body><h1>Add Product</h1><form action='/products' method='POST' ><input type='text' name='product_name' placeholder='enter name...' /><button type='submit'>Submit</button></form></body></html>")
})

router.post('/products',(req, res, next)=>{
    console.log(req.body.product_name)
    res.redirect('/')
})

module.exports = router