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