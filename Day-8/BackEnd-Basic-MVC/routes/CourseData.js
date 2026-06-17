import express from 'express'
import { course } from '../controller/CourseController.js'

const routes = express.Router()

routes.post("/CourseData",course)


export default routes

// http://localhost:5000/api/course/CourseData

