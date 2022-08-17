const express = require('express')

const router = express.Router()
const isAuth = require('../middleware/is-auth')
const notLoggedIn = require('../middleware/not-loggedin')

const {getRegister, postRegister,getLogin, postLogin, postLogout} = require('../controllers/auth')

router.get('/register', notLoggedIn, getRegister)

router.post('/register', notLoggedIn, postRegister)

router.get('/login', notLoggedIn, getLogin)

router.post('/login', notLoggedIn, postLogin)

router.post('/logout', isAuth, postLogout)

module.exports = router