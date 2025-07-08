import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import authModel from '../Models/authModel.js'


const RegisterUser = async(req,res) => {
    try {
        // if user already exist
        const userExist = await authModel.findOne({email:req.body.email})
        if (userExist)
        {
          return  res.send({
                message:'User Already Exist',
                success: false
            })
        }

        // encrypt the password
        const hashedPassword = await bcryptjs.hash(req.body.password,10)
        req.body.password = hashedPassword

        // create new user

        const newUser = new authModel(req.body);
        await newUser.save()
        res.status(201).send({
            message: 'User Created Successfully',
            success: true,
            data: newUser
        })
       
    } catch (error) {
        console.log(error)
        res.send({
            message: error.message,
            success: false
        })
    }
}

const userLogin = async(req,res) => {
    try {
        //check if the user exist
        const userExist = await authModel.findOne({email:req.body.email})
        if(!userExist)
        {
            return res.send({
                message: 'User does not exist',
                success: false
            })
        }
        // if user is exist then check if the password is correct
        const matchPassword = await bcryptjs.compare(req.body.password, userExist.password)
        if(!matchPassword)
        {
            res.send({
                message: 'Invalid password',
                success: false
            })
        }
        //if the user is exist and password is correct  create json web token
       const token =  jwt.sign({id:userExist._id}, process.env.SECRET_KEY, {expiresIn:"1d"})
       console.log("Token",token) 
       res.send({
            message: 'User logged-in successfully',
            success: true,
            token: token,
            data: userExist
        })
    } catch (error) {
        console.log(error)
        res.send({
            message: error.message,
            success: false
        })
    }
}


export {RegisterUser,userLogin}