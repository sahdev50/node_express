const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const path = require('path')
const app = express()

// serving html pages with ejs
app.set('view engine','ejs')
app.set('views', path.join(__dirname,'views'))

// serving static files(css, js or images)
app.use(express.static(path.join(__dirname,'public')))

// routers
const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')
const error404 = require('./controllers/error404')

app.use(bodyParser.urlencoded({extended:false}))

// use routers
app.use(adminRouter)
app.use(shopRouter)

// error router
app.use(error404.getError404NotFound)

mongoose.connect('mongodb+srv://Sahdev:D6RZupAjCkOU4ZlH@cluster0.3knhwsk.mongodb.net/first-db?retryWrites=true&w=majority').then(result=>{
    app.listen(3000, ()=>{
        console.log('server started at http://localhost:3000 ...')
    })
}).catch(err=>{
    console.log(err)
})

// mongoDB URI
// mongodb+srv://Sahdev:D6RZupAjCkOU4ZlH@cluster0.3knhwsk.mongodb.net/?retryWrites=true&w=majority
