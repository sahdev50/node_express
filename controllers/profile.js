exports.getProfile = (req, res, next)=>{
    return res.render('pages/profile',{
        title:'Profile',
        path:'profile',
        successMessage:req.flash('success')
    })
}

exports.getAddCar = (req, res, next)=>{
    return res.render('pages/add-car',{
        title:'Add Car',
        path:'addcar',
    })
}

exports.getEditCar = (req, res, next)=>{
    return res.render('pages/edit-car',{
        title:'Edit Car',
        path:'profile',
    })
}