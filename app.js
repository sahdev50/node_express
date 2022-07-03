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

app.use(bodyParser.urlencoded({extended:false}))

// use routers
app.use(adminRouter)

app.get('/',(req, res, next)=>{
    res.send('<h1>Home Page</h1>')
})


app.listen(3000, ()=>{
    console.log('server started at http://localhost:3000 ...')
})

