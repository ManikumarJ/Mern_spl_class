import express from 'express'
import { addData, getdatabyheader, getdatabynum, getdatabyquery } from '../controller/DataController.js'

const route = express.Router()

route.post('/userdata', addData)
route.get('/getdatabynum/:useridbynumber',getdatabynum)
route.get('/getdatabyquery',getdatabyquery)
route.get('/getdatabyheader',getdatabyheader)


export default route

// http://localhost:5000/api/Data/userdata
// http://localhost:5000/api/Data/getdatabynum/100000
// http://localhost:5000/api/Data/getdatabyquery
// http://localhost:5000/api/Data/getdatabyheader
