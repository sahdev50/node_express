const express = require('express')

const router = express.Router()

const isAuth = require('../middleware/is-auth')

const {getAddCar, getEditCar, getProfile, postAddCar, getUserSingleCarPage} = require('../controllers/profile')

router.get('/profile', isAuth,getProfile)

router.get('/addcar', isAuth,getAddCar)

router.post('/addcar', isAuth, postAddCar)

router.get('/editcar', isAuth, getEditCar)

router.get('/profile/:carId', isAuth, getUserSingleCarPage)

module.exports = router