import express from 'express'
import { addPricingPackage, deletePricingPackage, editPricingPackage, getPricingPackage, getSinglePricingPackage } from '../Controller/pricingController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const pricingRouter = express.Router();

// public route
pricingRouter.get('/public', getPricingPackage)

// protected Route for admin 
pricingRouter.post('/create',authMiddleware, addPricingPackage)
pricingRouter.get('/admin',authMiddleware, getPricingPackage)
pricingRouter.get('/admin/:id',authMiddleware, getSinglePricingPackage)
pricingRouter.put('/update/:id',authMiddleware, editPricingPackage)
pricingRouter.delete('/delete/:id',authMiddleware, deletePricingPackage)


export default pricingRouter