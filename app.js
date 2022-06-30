const express = require('express')
const bodyParser = require('body-parser')
const app = express()

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

