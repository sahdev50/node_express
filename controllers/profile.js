exports.getProfile = (req, res, next)=>{
    return res.render('pages/profile',{
        title:'Profile',
        path:'profile',
        isLoggedIn:req.session.isLoggedIn
    })
}

exports.getAddCar = (req, res, next)=>{
    return res.render('pages/add-car',{
        title:'Add Car',
        path:'addcar',
        isLoggedIn:req.session.isLoggedIn
    })
}

exports.getEditCar = (req, res, next)=>{
    return res.render('pages/add-car',{
        title:'Edit Car',
        path:'profile',
        isLoggedIn:req.session.isLoggedIn
    })
}