const express = require('express')

const router = express.Router()

const isAuth = require('../middleware/is-auth')

const {getAddCar, getEditCar, getProfile} = require('../controllers/profile')

router.get('/profile', isAuth,getProfile)

router.get('/addcar', isAuth,getAddCar)

router.get('/editcar', isAuth, getEditCar)

module.exports = router