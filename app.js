const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
// initialize app
const app = express()

// set ejs
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res, next)=>{
    res.render('index', {
        name:'sahdev'
    })
})
app.post('/get_form',(req, res, next)=>{
    console.log(req.body.name)
    res.redirect('/')
})

app.listen(3000, ()=>{
    console.log('server started at http://localhost:3000/')
})