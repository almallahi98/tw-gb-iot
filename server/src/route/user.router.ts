import express from 'express';
import { getAllNodes } from '../controllers/nodes.controller';
import { Login, Register } from '../controllers/user.controller';
import { check_user } from '../middelware/check_username';
import { validator } from '../middelware/zod_validator/validate';
import { RegisterSchema } from '../schema/auth.schema';
const userRouter=express.Router();

//aurh
userRouter.post('/login',Login);
userRouter.post('/register',validator(RegisterSchema),check_user,Register);


//nodes

export default userRouter;