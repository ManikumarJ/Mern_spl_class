import express from 'express'
import { login } from '../controller/LoginController.js'


const route = express.Router()

route.post("/LoginData",login)

export default route

// http://localhost:5000/api/login/LoginData