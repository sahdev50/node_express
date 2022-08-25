const mongoose = require('mongoose')
const {Schema}= require('mongoose')

const UserSchema = new Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    cars:{
        type:[{type:ObjectId, ref:'Car'}],
    }
})

module.exports = mongoose.model('User', UserSchema)