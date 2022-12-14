import express from 'express'
import { addNewNode, deleteNode, getAllNodes, getNodeById, updateNode } from '../controllers/nodes.controller';
import { avrNum } from '../controllers/statistic.controller';
import { portact } from '../middelware/auth/auth';
import { validator } from '../middelware/zod_validator/validate';
import { nodesSchema } from '../schema/node.shema';
const nodesRouter=express.Router();

nodesRouter.get('/getnodes',portact,getAllNodes);
nodesRouter.post('/add',portact,addNewNode);
nodesRouter.put('/update/:node_id',portact,validator(nodesSchema),updateNode);
nodesRouter.delete('/delete/:node_id',portact,deleteNode);
// from this endpoint we have to add delete sensor

nodesRouter.get('/getnode/:id',portact,getNodeById)
nodesRouter.get('/datetime',avrNum)


export default nodesRouter;