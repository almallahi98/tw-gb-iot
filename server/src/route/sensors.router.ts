import expess from 'express';
import { addNodeSensor, deleteNodeSensor, getAllNodeSenor, getsensorType, updateNodeSensor } from '../controllers/sensor.controller';
import { portact } from '../middelware/auth/auth';

const sensorsRouter=expess.Router();

sensorsRouter.get('/getseneors/:id',portact,getAllNodeSenor);
sensorsRouter.post('/addnewsensor',addNodeSensor);
sensorsRouter.put('/updatesensor/:id',updateNodeSensor);
sensorsRouter.delete('/deletesenosr/:id',portact,deleteNodeSensor);
sensorsRouter.get('/getsensorstype',getsensorType);

export default sensorsRouter;
