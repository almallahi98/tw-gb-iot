import express from 'express'
import { getAllNodes } from '../controllers/nodes.controller';
import { portact } from '../middelware/auth/auth';
const nodesRouter=express.Router();

nodesRouter.get('/getnodes/:user_id',portact,getAllNodes);


export default nodesRouter;