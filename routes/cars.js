const express = require('express')

const router = express.Router()

const {getCars, getCompare, getSingleCar, postCompare} = require('../controllers/cars')

router.get('/cars',getCars)

router.get('/cars/:carId', getSingleCar)

router.get('/compare',getCompare)

router.post('/compare-cars', postCompare)

module.exports = router