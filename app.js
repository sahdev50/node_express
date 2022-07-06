const express = require('express')
const bodyParser = require('body-parser')
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

app.use(bodyParser.urlencoded({extended:false}))

// use routers
app.use(adminRouter)
app.use(shopRouter)

app.listen(3000, ()=>{
    console.log('server started at http://localhost:3000 ...')
})

