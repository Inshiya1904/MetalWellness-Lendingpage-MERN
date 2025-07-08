import  express from "express"
import 'dotenv/config'
import cors from 'cors'
import { connectDB } from "./config/dbConfig.js";
import authRouter from "./Routes/authRoute.js";
import pricingRouter from "./Routes/pricingRoute.js";
import enquiryRouter from "./Routes/enquiryRoutes.js";

const app = express();
const port = process.env.PORT || 4000;

//DB connection
connectDB();
app.use(cors()) // using this we can access backend from frontend

// middleware
app.use(express.json()); // use it convert json string into js object



// api endpoints
app.use('/api/auth', authRouter);
app.use('/api/pricing', pricingRouter);
app.use('/api/enquiry', enquiryRouter);


app.get('/',(req,res) => {
    res.send("Hello Backend")
})



// server
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})