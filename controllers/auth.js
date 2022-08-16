const bcrypt = require('bcrypt')
const { redirect } = require('express/lib/response')

const User = require('../models/user')

exports.getRegister = (req, res, next)=>{
    return res.render('auth/register',{
        title:'Register',
        path:'register',
        isLoggedIn:req.session.isLoggedIn
    })
}

exports.postRegister = async(req, res, next)=>{
    const email = req.body.email
    const password = await bcrypt.hash(req.body.password, 12)
    User.findOne({email:email}).then((result)=>{
        if(result){
            return res.redirect('/register')
        }
        const user = new User({
            email:email,
            password:password
        })
        return user.save().then((userSaved)=>{
            return res.redirect('/')
        })
    })
}

exports.getLogin = (req, res, next)=>{
    return res.render('auth/login', {
        title:'Login',
        path:'login',
        isLoggedIn:req.session.isLoggedIn
    })
}

exports.postLogin = (req, res, next)=>{
    const email = req.body.email
    const password = req.body.password
    User.findOne({email:email}).then((user)=>{
        if(!user){
            return res.redirect('/login')
        }
        bcrypt.compare(password, user.password).then(matched=>{
            if(!matched){
                return res.redirect('/login')
            }
            req.session.isLoggedIn = true
            req.session.user = user
            return req.session.save(err=>{
                console.log(err)
                return res.redirect('/')
            })
        })
    })
}

exports.postLogout = (req, res, next)=>{
    req.session.user= null
    req.session.isLoggedIn = false
    req.session.destroy(()=>{
        return res.redirect('/')
    })
}