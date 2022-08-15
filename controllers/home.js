exports.getHomePage = (req, res, next)=>{
    return res.render('index',{
        title:'Home',
        path:'home',
    })
}