exports.getError404NotFound = (req, res, next )=>{
    return res.status(404).render('error404',{
        pageTitle:'Page Not Found'
    })
}