import express from "express";
import { Emp } from "../controller/EmpController.js";

const route = express.Router();

route.get("/departments", Emp);

export default route;

// http://localhost:5000/api/departments