const express = require('express')

const router = express.Router()

const {getCars, getCompare} = require('../controllers/cars')

router.get('/cars',getCars)

router.get('/compare',getCompare)

module.exports = router