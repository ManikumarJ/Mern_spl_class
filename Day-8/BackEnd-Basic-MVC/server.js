import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import userData from './routes/UserData.js'
import courseData from './routes/CourseData.js'
import employeeData from './routes/EmployeeData.js'

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()


app.use(cors())
app.use(express.json())

app.use("/api/users",userData)

app.use("/api/course",courseData)

app.use("/api/employee",employeeData)


app.listen(PORT,()=>{
    console.log(`Server connected sucessfully http://localhost:${PORT}`);
    
})

// 1. Make the Server and make the 3 API for the users datas and course datas and exployees datas using controller

// http://localhost:5000/api/users
// http://localhost:5000/api/course
// http://localhost:5000/api/employee