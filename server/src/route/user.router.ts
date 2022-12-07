import express from 'express';
import { Login, Register } from '../controllers/user.controller';
const userRouter=express.Router();
userRouter.use('/login',Login);
userRouter.use('/register',Register);
export default userRouter;