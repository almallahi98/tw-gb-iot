import express from 'express'
import { inputData } from '../controllers/nodeData.controller';
const nodeData=express.Router();

nodeData.use('/insertdata/:nodeid',inputData);

export default nodeData

