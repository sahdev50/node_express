const Product = require('../models/product')

exports.getAddProduct = (req, res, next)=>{
        return res.render('admin.ejs',{
            pageTitle:'add-product'
        })
    }
exports.postAddProduct = (req, res, next)=>{
    const title = req.body.title
    const description = req.body.description
    const product = new Product({
        title:title,
        description:description
    })
    product.save().then(result=>{
        console.log(result)
        return res.redirect('/')
    }).catch(err=>{
        console.log(err)
    })
}