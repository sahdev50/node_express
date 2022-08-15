const express = require('express')

const router = express.Router()

const {getRegister, postRegister,getLogin, postLogin, postLogout} = require('../controllers/auth')

router.get('/register', getRegister)

router.post('/register', postRegister)

router.get('/login', getLogin)

router.post('/login', postLogin)

router.post('/logout', postLogout)

module.exports = router