const Product = require('../models/product')

exports.getProducts = (req, res, next)=>{
    Product.find().then(products=>{
        console.log(products)
        return res.render('shop',{
            pageTitle:'Shop',
            products:products
        })
    }).catch(err=>{
        console.log(err)
    })
}
exports.getSingleProduct = (req, res, next)=>{
    const prodId = req.params.prodId
    Product.findById(prodId).then(product=>{
        return res.render('product',{
            pageTitle:product.title,
            product:product
        })
    }).catch(err=>{
        console.log(err)
    })
}