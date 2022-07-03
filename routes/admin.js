const express = require('express')

const router = express.Router()

router.get('/add-product', (req, res, next)=>{
    res.render('admin.ejs',{
        path:'/add-product',
        pageTitle:'admin'
    })
    })

router.post('/products',(req, res, next)=>{
    console.log(req.body.product_name)
    res.redirect('/')
})

module.exports = router