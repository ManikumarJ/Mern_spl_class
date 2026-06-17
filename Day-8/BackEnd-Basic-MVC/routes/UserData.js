import express from 'express'
import {userData } from '../controller/userController.js'

const route = express.Router()

route.post("/userController", userData)


export default route

// http://localhost:5000/api/users/userController  