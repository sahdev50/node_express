const express = require('express')

const router = express.Router()

const isAuth = require('../middleware/is-auth')

const {getAddCar, getEditCar, getProfile, postAddCar} = require('../controllers/profile')

router.get('/profile', isAuth,getProfile)

router.get('/addcar', isAuth,getAddCar)

router.post('/addcar', isAuth, postAddCar)

router.get('/editcar', isAuth, getEditCar)

module.exports = router