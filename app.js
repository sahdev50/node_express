require('dotenv').config()
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const flash = require('express-flash')
const session = require('express-session')
const mongoDBStore = require('connect-mongodb-session')(session)
// initialize app
const app = express()

const store = new mongoDBStore({
    uri:process.env.MONGODB_URI,
    collection:'sessions'
})

const homeRouter = require('./routes/home')
const authRouter = require('./routes/auth')
const profileRouter = require('./routes/profile')
const carsRouter = require('./routes/cars')
// set ejs
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false,
    store:store
}))

app.use(homeRouter)
app.use(authRouter)
app.use(profileRouter)
app.use(carsRouter)
app.use('*', (req, res, next)=>{
    return res.render('error404',{
        title:'Page Not Found',
        path:''
    })
})

mongoose.connect(process.env.MONGODB_URI).then((result)=>{
    app.listen(3000, ()=>{
        console.log('server started at http://localhost:3000/')
    })
}).catch((err)=>{
    console.log(err)
})