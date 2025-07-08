import express from 'express'
import { RegisterUser, userLogin } from '../Controller/authController.js';

const authRouter = express.Router();

authRouter.post('/signup',RegisterUser)
authRouter.post('/login',userLogin)


export default authRouter