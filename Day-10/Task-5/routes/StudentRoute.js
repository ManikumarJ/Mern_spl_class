import express from 'express';
import { createStudent } from '../controller/StudentController.js';

const router = express.Router();

router.post('/studentData', createStudent);

export default router;


// http://localhost:5000/stud/studentData