import express from 'express';
import { AuthUser,RegisterUser, LogoutUser, GettingUserProfile, UpdatedUserProfile } from '../Controller/UserController.js';
import { protect } from '../Middleware/AuthMiddleware.js';
const router = express.Router();

router.post('/', RegisterUser);
router.post('/Login', AuthUser);
router.post('/logout', LogoutUser);
router.get('/profile',protect, GettingUserProfile);
router.put ('/profile',protect, UpdatedUserProfile);

export default router;