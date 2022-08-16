exports.getCars = (req, res, next)=>{
    return res.render('pages/cars',{
        title:'Cars',
        path:'cars',
        isLoggedIn:req.session.isLoggedIn
    })
}

exports.getCompare = (req, res, next)=>{
    return res.render('pages/compare',{
        title:'Compare',
        path:'compare',
        isLoggedIn:req.session.isLoggedIn
    })
}