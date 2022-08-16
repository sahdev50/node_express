const express = require('express')

const router = express.Router()
const isAuth = require('../middleware/is-auth')

const {getRegister, postRegister,getLogin, postLogin, postLogout} = require('../controllers/auth')

router.get('/register', getRegister)

router.post('/register', postRegister)

router.get('/login', getLogin)

router.post('/login', postLogin)

router.post('/logout', isAuth, postLogout)

module.exports = router