import mongoose from 'mongoose'

const authSchema = new mongoose.Schema({
     email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

const authModel = mongoose.model("auth",authSchema)

export default authModel