const express = require('express')

const router = express.Router()

const {getCars, getCompare, getSingleCar} = require('../controllers/cars')

router.get('/cars',getCars)

router.get('/cars/:carId', getSingleCar)

router.get('/compare',getCompare)

module.exports = router