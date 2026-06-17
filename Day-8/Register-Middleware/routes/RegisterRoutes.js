import express from 'express'
import { reg } from '../controller/RegisterController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const routes = express.Router()

routes.post("/RegisterForm", authMiddleware ,reg)


export default routes


// http://localhost:5000/api/register/RegisterForm