const car = require('../models/car')
const Car = require('../models/car')

exports.getCars = (req, res, next)=>{
    Car.find().then(cars=>{
        console.log(cars)
        return res.render('pages/cars',{
            title:'Cars',
            path:'cars',
            cars:cars
        })
    }).catch(err=>{
        console.log(err)
    })
}

exports.getSingleCar = (req, res, next)=>{
    const carId = req.params.carId
    Car.findById(carId).then(car=>{
        return res.render('pages/singlecar', {
            title:'E-Car',
            path:'cars',
            car:car
        })
    }).catch(err=>{
        console.log(err)
    })
}

exports.getCompare = (req, res, next)=>{
    Car.find().then(cars=>{
        console.log(cars)
        return res.render('pages/compare',{
            title:'Compare',
            path:'compare',
            cars:cars
        })
    }).catch(err=>{
        console.log(err)
    })
}