import express from 'express';
import { AuthUser } from '../Controller/UserController.js';
const router = express.Router();

router.post('/auth', AuthUser);

export default router;