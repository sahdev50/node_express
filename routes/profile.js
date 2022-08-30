const express = require('express')

const router = express.Router()

const isAuth = require('../middleware/is-auth')

const {getAddCar, getEditCar, getProfile, postAddCar, getUserSingleCarPage, postDeleteCar, postEditCar} = require('../controllers/profile')

router.get('/profile', isAuth,getProfile)

router.get('/addcar', isAuth,getAddCar)

router.post('/addcar', isAuth, postAddCar)

router.get('/editcar/:carId', isAuth, getEditCar)

router.post('/updatecar', isAuth, postEditCar)

router.get('/profile/:carId', isAuth, getUserSingleCarPage)

router.post('/delete-car', isAuth, postDeleteCar)

module.exports = router