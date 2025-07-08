import mongoose from 'mongoose'

const priceSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique: true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    features:{
        type:[String],
        default: []
    }
},{timestamps:true})

const priceModel = mongoose.model("price",priceSchema)

export default priceModel