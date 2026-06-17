import express from 'express'
import { emp } from '../controller/EmployeeController.js'

const routes = express.Router()

routes.post("/empData", emp )

export default routes

// http://localhost:5000/api/employee/empData