import express from 'express'
import { authMiddleware } from '../middleware/authMiddleware.js';
import { createEnquiry, getAllEnquiries } from '../Controller/enquiryController.js';

const enquiryRouter = express.Router();

enquiryRouter.post('/create',createEnquiry)
enquiryRouter.get('/list',authMiddleware, getAllEnquiries)

export default enquiryRouter