import express from 'express';
import { getUserById } from '../controller/UserController.js';

const router = express.Router();

router.get('/:id', getUserById);

export default router;

// http://localhost:5000/user/:id