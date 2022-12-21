import expess from 'express';
import { addNodeSensor, deleteAllSensor, deleteAllSensorData, deleteNode, deleteNodeSensor, getAllNodeSenor,updateNodeSensor } from '../controllers/sensor.controller';
import { portact } from '../middelware/auth/auth';

const sensorsRouter=expess.Router();

sensorsRouter.get('/getseneors/:id',portact,getAllNodeSenor);
sensorsRouter.post('/addnewsensor',addNodeSensor);
sensorsRouter.put('/updatesensor/:id',updateNodeSensor);
sensorsRouter.delete('/deletesenosr/:id',portact,deleteNodeSensor);
//remove this to node controller!!! 
sensorsRouter.delete('/deletenode/:id',portact,deleteAllSensorData,deleteAllSensor,deleteNode);


export default sensorsRouter;
