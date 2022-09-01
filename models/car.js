const mongoose = require('mongoose')

const {Schema} = require('mongoose')

const carSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    manufacturer:{
        type:String,
        required:true
    },
    modelYear:{
        type:Number,
        required:true
    },
    batterySize:{
        type:Number,
        required:true
    },
    wltpRange:{
        type:Number,
        required:true
    },
    carCost:{
        type:Number,
        required:true
    },
    carPower:{
        type:Number,
        requierd:true
    },
    carImage:{
        type:String,
        required:true
    },
    addedBy:{
        type:String,
        required:true
    },
    userId:{type:mongoose.Types.ObjectId,
    ref:'User'}
})

module.exports = mongoose.model('Car', carSchema)