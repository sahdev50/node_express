const Car = require('../models/car')
const User = require('../models/user')

// fileHelper
const fileHelper = require('../utils/fileHelper')

exports.getProfile = (req, res, next)=>{
    const sessionUser = req.session.user
    User.findById(sessionUser._id).populate('cars').exec((err, user)=>{
        return res.render('pages/profile',{
            title:'Profile',
            path:'profile',
            cars:user.cars,
            successMessage:req.flash('success')
        })
    })
}

exports.getAddCar = (req, res, next)=>{
    return res.render('pages/add-car',{
        title:'Add Car',
        path:'profile',
    })
}

exports.postAddCar = (req, res, next)=>{
    const carName = req.body.carname
    const manufacturer = req.body.manufacturer
    const modelYear = req.body.modelyear
    const carBattery = req.body.carbattery
    const wltpRange = req.body.wltprange
    const carCost = req.body.carcost
    const carPower = req.body.carpower
    const carImage = req.file
    const sessionUser = req.session.user
    User.findById(sessionUser._id).then(user=>{
        const car = new Car({
            name:carName,
            manufacturer:manufacturer,
            modelYear:modelYear,
            batterySize:carBattery,
            wltpRange:wltpRange,
            carCost:carCost,
            carPower:carPower,
            carImage:carImage.path
        })
        car.save().then(carr=>{
            user.cars.push(carr._id)
            return user.save().then(result=>{
                req.flash('success', 'car addedd successfully!')
                return res.redirect('/profile')
            }).catch(err=>{
                console.log(err)
            })
        }).catch(err=>{console.log(err)})
    }).catch(err=>{
        console.log(err)
    })
}

exports.getEditCar = (req, res, next)=>{
    return res.render('pages/edit-car',{
        title:'Edit Car',
        path:'profile',
    })
}

exports.getUserSingleCarPage = (req, res, next)=>{
    const carId = req.params.carId
    Car.findById(carId).then(car=>{
        return res.render('pages/usercar', {
            title:'e-car',
            path:'profile',
            car:car
        })
    }).catch(err=>{
        console.log(err)
    })
}

exports.postDeleteCar = (req, res, next)=>{
    const carId = req.body.carId
    Car.findById(carId).then(car=>{
        fileHelper.deleteFile(car.carImage)
        User.findById(req.session.user._id).then(user=>{
            const cars = user.cars
            const index = cars.indexOf(car._id);
            if (index > -1) { 
                cars.splice(index, 1);
            }
            const update={
                cars:cars
            }
            User.findByIdAndUpdate(req.session.user._id, update).then(result=>{}).catch(err=>console.log(err))
        })
        Car.findByIdAndRemove(carId).then(result=>{
            return res.redirect('/profile')
        }).catch(err=>{
            console.log(err)
        })
    }).catch(err=>{
        console.log(err)
    })
}