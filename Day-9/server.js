import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import DataRoutes from './routes/DataRoutes.js'

dotenv.config()

const PORT =  process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/Data",DataRoutes)

app.listen(PORT,()=>{
    console.log(`Server connected sucessfully http://localhost:${PORT}`);

})

// http://localhost:5000/api/Data