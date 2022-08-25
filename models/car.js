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
    carPower:{
        type:Number,
        requierd:true
    }
})

module.exports = mongoose.model('Car', carSchema)