import express from 'express';
import { AuthUser,RegisterUser, LogoutUser, GettingUserProfile, UpdatedUserProfile } from '../Controller/UserController.js';
const router = express.Router();

router.post('/', RegisterUser);
router.post('/auth', AuthUser);
router.post('/logout', LogoutUser);
router.get('/profile', GettingUserProfile);
router.put ('/profile', UpdatedUserProfile);

export default router;