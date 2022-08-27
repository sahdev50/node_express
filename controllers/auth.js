const bcrypt = require('bcrypt')
const random = require('random')

const User = require('../models/user')

const imgData = require('../data/prof-imgs')

console.log(imgData.length)

exports.getRegister = (req, res, next)=>{
    return res.render('auth/register',{
        title:'Register',
        path:'register',
        errorMessage:req.flash('error')
    })
}

exports.postRegister = async(req, res, next)=>{
    const fname = req.body.firstname
    const lname = req.body.lastname
    const email = req.body.email
    const password = req.body.password
    const confirmPassword = req.body.confirmpassword
    // profile image
    const randomNum = random.int(0,14)
    const profImg = imgData[randomNum]
    if (password !== confirmPassword){
        req.flash('error','passwords not matched, please try again!')
        return res.redirect('/register')
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12)
    User.findOne({email:email}).then((result)=>{
        if(result){
            req.flash('error','user with same email-address already exist!')
            return res.redirect('/register')
        }
        const user = new User({
            firstname:fname,
            lastname:lname,
            email:email,
            password:hashedPassword,
            profimg:profImg
        })
        return user.save().then((userSaved)=>{
            return res.redirect('/login')
        })
    })
}

exports.getLogin = (req, res, next)=>{
    return res.render('auth/login', {
        title:'Login',
        path:'login',
        errorMessage:req.flash('error')
    })
}

exports.postLogin = (req, res, next)=>{
    const email = req.body.email
    const password = req.body.password
    User.findOne({email:email}).then((user)=>{
        if(!user){
            req.flash('error','email or password invalid!')
            return res.redirect('/login')
        }
        bcrypt.compare(password, user.password).then(matched=>{
            if(!matched){
                req.flash('error','password invalid!')
                return res.redirect('/login')
            }
            req.session.isLoggedIn = true
            req.session.user = user
            return req.session.save(err=>{
                req.flash('success','logged-in successfully!')
                return res.redirect('/profile')
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