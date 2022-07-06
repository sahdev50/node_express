exports.getAddProduct = (req, res, next)=>{
    res.render('admin.ejs',{
        path:'/add-product',
        pageTitle:'admin'
    })
    }

exports.postAddProduct = (req, res, next)=>{
    console.log(req.body.product_name)
    res.redirect('/')
}