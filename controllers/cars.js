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
        return res.render('pages/compare',{
            title:'Compare',
            path:'compare',
            cars:cars
        })
    }).catch(err=>{
        console.log(err)
    })
}

exports.postCompare = (req, res, next)=>{
    const cars = req.body.cars
    Car.find().where('_id').in(cars).exec((err, cars) => {
        const maxbSize = Math.max(...cars.map(car => car.batterySize));
        const minbSize = Math.min(...cars.map(car => car.batterySize));
        const maxRange = Math.max(...cars.map(car => car.wltpRange));
        const minRange = Math.min(...cars.map(car => car.wltpRange));
        const maxCost = Math.max(...cars.map(car => car.carCost));
        const minCost = Math.min(...cars.map(car => car.carCost));
        const maxPower = Math.max(...cars.map(car => car.carPower));
        const minPower = Math.min(...cars.map(car => car.carPower));
        return res.render('pages/comparision',{
            title:'Comparision',
            path:'compare',
            cars:cars,
            maxbSize:maxbSize,
            maxRange:maxRange,
            maxPower:maxPower,
            maxCost:maxCost,
            minbSize:minbSize,
            minRange:minRange,
            minPower:minPower,
            minCost:minCost
        })
    });
}