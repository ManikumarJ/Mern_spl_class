import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import login from "./routes/LoginRoutes.js"


dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/login", login)

app.listen(PORT,()=>{
    console.log(`Server connnected sucessfully http://localhost:${PORT}`);
    
})

// http://localhost:5000/api/login