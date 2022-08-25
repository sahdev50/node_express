require('dotenv').config()
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const flash = require('connect-flash')
const session = require('express-session')
const mongoDBStore = require('connect-mongodb-session')(session)
const csrf = require('csurf')
const multer = require('multer')
const {v4:uuidv4} = require('uuid')
// initialize app
const app = express()

// routes
const homeRouter = require('./routes/home')
const authRouter = require('./routes/auth')
const profileRouter = require('./routes/profile')
const carsRouter = require('./routes/cars')

//multer storage and filtering file type
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, uuidv4() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// User Model
const User = require('./models/user')

const store = new mongoDBStore({
    uri:process.env.MONGODB_URI,
    collection:'sessions'
})

const csrfToken = csrf()

// set ejs
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname,'public')))
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false,
    store:store
}))

// always after session
app.use(flash())
// using csrf
app.use(csrfToken)
app.use((req, res, next)=>{
    res.locals.isLoggedIn=req.session.isLoggedIn
    res.locals.csrfToken=req.csrfToken()
    next()
})

app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("carimage")
);

//adding user model to allover using session
app.use((req, res, next) => {
    if (!req.session.user) {
      return next();
    }
    User.findById(req.session.user._id)
      .then((user) => {
        if (!user) {
          return next();
        }
        req.user = user;
        // optional
        res.locals.userInfo = user
        next();
      })
      .catch((err) => {
        next(new Error(err));
      });
  });

// routes
app.use(homeRouter)
app.use(authRouter)
app.use(profileRouter)
app.use(carsRouter)
app.use('*', (req, res, next)=>{
    return res.render('error404',{
        title:'Page Not Found',
        path:'',
        isLoggedIn:''
    })
})

mongoose.connect(process.env.MONGODB_URI).then((result)=>{
    app.listen(3000, ()=>{
        console.log('server started at http://localhost:3000/')
    })
}).catch((err)=>{
    console.log(err)
})