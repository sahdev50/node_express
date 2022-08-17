exports.getCars = (req, res, next)=>{
    return res.render('pages/cars',{
        title:'Cars',
        path:'cars',
    })
}

exports.getCompare = (req, res, next)=>{
    return res.render('pages/compare',{
        title:'Compare',
        path:'compare',
    })
}