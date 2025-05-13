import express from 'express';
import { getAllUsers, getUserSummaries } from '../controllers/UserController';


const router = express.Router();

router.get('/users', getAllUsers);

router.get('/users/summaries', getUserSummaries);


export default router;
